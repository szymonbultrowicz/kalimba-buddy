import { atom, useAtom } from "jotai";
import React, { CSSProperties } from "react";
import { NoteRepresentation, noteRepresentationAtom } from "../settings/state";
import { colorNote } from "./color-note";
import {
  RepresentationConverter,
  toEnglishSign,
  toGermanSign,
  toNumber,
} from "./representation-converters";
import {
  isFailedTab,
  isSuccessfullyResolvedTab,
  ResolvedTab,
} from "./text2tab";

interface TabVisualisationProps {
  tab: ResolvedTab;
}

const commonStyles: CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  margin: 10,
};

const signConverterAtom = atom<RepresentationConverter>((get) => {
  const value = Number(get(noteRepresentationAtom));
  switch (value) {
    case NoteRepresentation.English:
      return toEnglishSign;
    case NoteRepresentation.German:
      return toGermanSign;
    default:
      return toNumber;
  }
});

export const TabVisualisation = ({ tab }: TabVisualisationProps) => {
  const [signConverter] = useAtom(signConverterAtom);

  return (
    <>
      {isFailedTab(tab) && (
        <span title={tab.error} style={{ ...commonStyles, color: "red" }}>
          {tab.input}
        </span>
      )}
      {isSuccessfullyResolvedTab(tab) &&
        (Array.isArray(tab) ? (
          <>
            <span>(</span>
            {tab.map((t) => (
              <TabVisualisation tab={t} />
            ))}
            <span>)</span>
          </>
        ) : (
          <span style={{ ...commonStyles, color: colorNote(tab) }}>
            {signConverter(tab)}
            {[...Array(tab.octave - 4)].map(() => "°")}
          </span>
        ))}
    </>
  );
};

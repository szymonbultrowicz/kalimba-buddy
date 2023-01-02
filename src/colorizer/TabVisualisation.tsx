import React, { CSSProperties } from "react";
import { colorNote } from "./color-note";
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

export const TabVisualisation = ({ tab }: TabVisualisationProps) => {
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
            {tab.sign}
            {[...Array(tab.octave - 4)].map(() => "°")}
          </span>
        ))}
    </>
  );
};

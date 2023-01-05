import { atom } from "jotai";

export enum NoteRepresentation {
  Letters,
  Numbers,
}

export const noteRepresentationAtom = atom(NoteRepresentation.Letters);

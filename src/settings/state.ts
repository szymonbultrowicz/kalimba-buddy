import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => localStorage);

export enum NoteRepresentation {
  English,
  German,
  Numbers,
}

export const noteRepresentationAtom = atomWithStorage(
  "settings-note-representation",
  NoteRepresentation.Numbers,
  storage
);

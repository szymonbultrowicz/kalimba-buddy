import { Note } from "./music-models";

const signToNumberMap = new Map([
  ["C", 1],
  ["D", 2],
  ["E", 3],
  ["F", 4],
  ["G", 5],
  ["A", 6],
  ["B", 7],
  ["H", 7],
]);

export type RepresentationConverter = (note: Note) => string;

export const toEnglishSign: RepresentationConverter = (note) => note.sign;
export const toGermanSign: RepresentationConverter = (note) =>
  note.sign === "B" ? "H" : note.sign;
export const toNumber: RepresentationConverter = (note) =>
  String(signToNumberMap.get(note.sign));

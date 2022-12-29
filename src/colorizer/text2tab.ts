import { Tab, signValues, Sign, Octave, octaveValues } from "./music-models";
import antlr4 from "antlr4";
import KalimbaLexer from "../grammar/KalimbaLexer";
import KalimbaParser from "../grammar/KalimbaParser";

const octaveDotSign = "°";
const octaveDotSignRegex = new RegExp(`${octaveDotSign}`, "gi");

export interface FailedTab {
  input: string;
  error: string;
}

export type ResolvedTab = Tab | FailedTab;

export const isFailedTab = (tab: ResolvedTab): tab is FailedTab =>
  !!(tab as FailedTab).error;

export const isSuccessfullyResolvedTab = (tab: ResolvedTab): tab is Tab =>
  !(tab as FailedTab).error;

export const dotsToOctave = (input: string): Octave => {
  console.log(input);
  const octave = 4 + [...input.matchAll(octaveDotSignRegex)].length;
  return octaveValues.includes(octave as unknown as Octave)
    ? (octave as Octave)
    : 4;
};

export const octaveToDots = (octave: Octave): string =>
  [...Array(octave - 4)].map(() => octaveDotSign).join("");

const assumedTabToTab = (text: string): ResolvedTab => {
  let sign = text.toUpperCase().charAt(0);
  if (sign === "H") {
    sign = "B";
  }
  if (!signValues.includes(sign as unknown as Sign)) {
    return {
      input: text,
      error: `Failed to decode sign: ${sign}`,
    };
  }
  return {
    sign,
    octave: dotsToOctave(text.slice(1)),
  } as Tab;
};

export const lineToTabs = (line: string): Array<ResolvedTab> => {
  // line.split(' ')
  //     .filter(t => !!t.trim())
  //     .map(assumedTabToTab)
  const chars = new antlr4.InputStream(line);
  const lexer = new KalimbaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new KalimbaParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.program();
  console.log(tree);

  return [];
};

export const text2tab = (text: string): Array<Array<ResolvedTab>> =>
  text
    .split("\n")
    .filter((row) => !!row.trim())
    .map(lineToTabs);

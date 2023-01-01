import {
  Note,
  Tab,
  signValues,
  Sign,
  Octave,
  octaveValues,
} from "./music-models";
import antlr4 from "antlr4";
import KalimbaLexer from "../grammar/KalimbaLexer";
import KalimbaParser from "../grammar/KalimbaParser";

const octaveDotSign = "°";
const octaveDotSignRegex = new RegExp(`[${octaveDotSign}*]`, "gi");

export interface FailedNote {
  input: string;
  error: string;
}

export type ResolvedTab = Note | FailedNote | Array<Note | FailedNote>;

export const isFailedTab = (tab: ResolvedTab): tab is FailedNote =>
  !!(tab as FailedNote).error;

export const isSuccessfullyResolvedTab = (tab: ResolvedTab): tab is Tab =>
  !(tab as FailedNote).error;

const notUndefined = <T>(v: T | undefined): v is T => v !== undefined;

const notEmptyArray = <T>(v: T | T[]) => !Array.isArray(v) || v.length > 0;

const resolveSingletonArray = <T>(v: T | T[]) =>
  Array.isArray(v) && v.length === 1 ? v[0] : v;

export const dotsToOctave = (input: string): Octave => {
  console.log(input);
  const octave = 4 + [...input.matchAll(octaveDotSignRegex)].length;
  return octaveValues.includes(octave as unknown as Octave)
    ? (octave as Octave)
    : 4;
};

export const octaveToDots = (octave: Octave): string =>
  [...Array(octave - 4)].map(() => octaveDotSign).join("");

const resolveNote = (
  signInput: string,
  octaveInput: string | undefined
): Note | FailedNote => {
  let sign = signInput.toUpperCase();
  if (sign === "H") {
    sign = "B";
  }
  if (!signValues.includes(sign as unknown as Sign)) {
    return {
      input: signInput,
      error: `Failed to decode sign: ${sign}`,
    } as FailedNote;
  }
  return {
    sign,
    octave: octaveInput ? dotsToOctave(octaveInput) : 4,
  } as Note;
};

export const lineToTabs = (line: string): Array<ResolvedTab> => {
  const chars = new antlr4.InputStream(line);
  const lexer = new KalimbaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new KalimbaParser(tokens);
  parser.buildParseTrees = true;
  const antlrTabs = parser.line().expr() as Array<any>;
  return antlrTabs
    .map((t) => {
      if (t.exception) {
        console.warn("Exception:", t.exception);
        return undefined;
      }
      console.log("t", t.note(), t.group(), t);
      if (t.note()) {
        const antlrNote = t.note();
        return resolveNote(
          antlrNote.ID().getText(),
          antlrNote.OCTAVE()?.getText()
        );
      }
      if (t.group()) {
        const groupExpr = t.group().expr();
        if (!groupExpr) {
          return undefined;
        }
        if (!Array.isArray(groupExpr)) {
          return {
            input: "",
            error: `Syntax error: ${t.getText()}`,
          } as FailedNote;
        }

        return resolveSingletonArray(
          (groupExpr as Array<any>)
            .map((e) => {
              console.log("g", e);
              if (e.exception) {
                console.warn("Exception:", e.exception);
                return undefined;
              }
              const antlrNote = e.note();
              if (!antlrNote) {
                return {
                  input: t.getText(),
                  error: `Failed to understand`,
                } as FailedNote;
              }
              return antlrNote.ID()
                ? resolveNote(
                    antlrNote.ID().getText(),
                    antlrNote.OCTAVE()?.getText()
                  )
                : undefined;
            })
            .filter(notUndefined)
        );
      }
      console.error(t);
      return {
        input: t,
        error: `Failed to understand`,
      } as FailedNote;
    })
    .filter(notUndefined)
    .filter(notEmptyArray);
};

export const text2tab = (text: string): Array<Array<ResolvedTab>> =>
  text
    .split("\n")
    .filter((row) => !!row.trim())
    .map(lineToTabs)
    .filter(notEmptyArray);

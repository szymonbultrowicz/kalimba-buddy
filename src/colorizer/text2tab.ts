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
import KalimbaParser, {
  ExprContext,
  NoteContext,
} from "../grammar/KalimbaParser";

const normalizedOctaveSign = "*";
const alternativeOctaveSigns = new RegExp(`[°º]`, "gi");

export interface FailedNote {
  input: string;
  error: string;
}

export type ResolvedTab = Note | FailedNote | Array<Note | FailedNote>;

export const isFailedTab = (tab: ResolvedTab): tab is FailedNote =>
  !!(tab as FailedNote).error;

export const isSuccessfullyResolvedTab = (tab: ResolvedTab): tab is Tab =>
  !(tab as FailedNote).error;

const signMappings = new Map([
  ["H", "B"],
  ["1", "C"],
  ["2", "D"],
  ["3", "E"],
  ["4", "F"],
  ["5", "G"],
  ["6", "A"],
  ["7", "B"],
]);

const notUndefined = <T>(v: T | undefined): v is T => v !== undefined;

const notEmptyArray = <T>(v: T | T[]) => !Array.isArray(v) || v.length > 0;

const resolveSingletonArray = <T>(v: T | T[]) =>
  Array.isArray(v) && v.length === 1 ? v[0] : v;

export const dotsToOctave = (input: string): Octave => {
  const octave = 4 + (input.match(/\*/g) || []).length;
  return octaveValues.includes(octave as unknown as Octave)
    ? (octave as Octave)
    : 4;
};

const normalizeSign = (input: string) =>
  signMappings.has(input) ? signMappings.get(input) : input;

const resolveNote = (
  noteContext: NoteContext | undefined,
  parentContext: ExprContext
): Note | FailedNote => {
  if (!noteContext || !noteContext.ID()) {
    return {
      input: parentContext.getText(),
      error: `Failed to parse tab`,
    } as FailedNote;
  }
  const signInput = (noteContext.ID() as any).getText();
  const sign = normalizeSign(signInput.toUpperCase());
  if (!signValues.includes(sign as unknown as Sign)) {
    return {
      input: signInput,
      error: `Invalid note sign`,
    } as FailedNote;
  }
  const octaveInput = (noteContext.OCTAVE() as any)?.getText();
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
  const antlrTabs = parser.line().expr() as ExprContext[];
  return antlrTabs
    .map((t) => {
      if (t.exception) {
        console.warn("Exception:", t.exception);
        return undefined;
      }
      if (t.note()) {
        return resolveNote(t.note(), t);
      }
      if (t.group()) {
        const groupExpr = t.group().expr();
        if (!groupExpr) {
          return undefined;
        }
        // if (!Array.isArray(groupExpr)) {
        //   return {
        //     input: "",
        //     error: `Syntax error: ${t.getText()}`,
        //   } as FailedNote;
        // }

        return resolveSingletonArray(
          (groupExpr as ExprContext[])
            .map((e) => {
              if (e.exception) {
                console.warn("Exception:", e.exception);
                return undefined;
              }
              return resolveNote(e.note(), e);
            })
            .filter(notUndefined)
        );
      }
      console.error(t);
      return {
        input: t.getText(),
        error: `Failed to understand`,
      } as FailedNote;
    })
    .filter(notUndefined)
    .filter(notEmptyArray);
};

export const text2tab = (text: string): Array<Array<ResolvedTab>> =>
  text
    .replaceAll(alternativeOctaveSigns, normalizedOctaveSign)
    .split("\n")
    .filter((row) => !!row.trim())
    .map(lineToTabs)
    .filter(notEmptyArray);

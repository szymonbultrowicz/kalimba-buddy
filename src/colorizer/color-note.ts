import { Note, signValues } from "./music-models";

interface Position {
  side: "left" | "right" | "center";
  depth: number;
}

const isOddNote = (note: Note) => ["C", "E", "G", "H"].includes(note.sign);

const isOddOctate = (node: Note) => !!(node.octave % 2);

const calculatePosition = (note: Note): Position => {
  if (note.sign === "C" && note.octave === 4) {
    return {
      side: "center",
      depth: 0,
    };
  }
  const side = isOddNote(note) !== isOddOctate(note) ? "right" : "left";
  const depth =
    (note.octave - 4) * 4 + Math.ceil(signValues.indexOf(note.sign) / 2);
  return { side, depth };
};

export const colorNote = (note: Note): string => {
  const position = calculatePosition(note);
  console.log(note, position);
  const l = String(100 - (100 / 8) * position.depth);
  const color =
    position.side === "left" ? `hsl(264, 60%, ${l}%)` : `hsl(130, 50%, ${l}%)`;
  console.log(color);
  return color;
};

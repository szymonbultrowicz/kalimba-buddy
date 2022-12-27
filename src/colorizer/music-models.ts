export const signValues = ['C', 'D', 'E', 'F', 'G', 'A', 'H', 'B'] as const;
export type Sign = typeof signValues[number];
export const octaveValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export type Octave = typeof octaveValues[number];

export interface Note {
    sign: Sign;
    octave: Octave;
}

export type Tab = Note | Note[];

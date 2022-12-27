import { Tab, signValues, Sign, Octave, octaveValues } from "./music-models";

const octaveDotSign = '°';

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
    const octave = 4 + [...input.matchAll(/°/gi)].length;
    return octaveValues.includes(octave as unknown as Octave) ? octave as Octave : 4;
}

export const octaveToDots = (octave: Octave): string =>
    [...Array(octave - 4)].map(() => '°').join('')

const assumedTabToTab = (text: string): ResolvedTab => {
    const sign = text.toUpperCase().charAt(0) as unknown as Sign;
    if (!signValues.includes(sign)) { 
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

export const text2tab = (text: string): Array<Array<ResolvedTab>> => {
    const lines = text.split('\n')
            .filter(row => !!row.trim());
    return lines.map(row => 
        row.split(' ')
            .filter(t => !!t.trim())
            .map(assumedTabToTab)
    );
};
import React, { CSSProperties } from "react";
import { colorNote } from "./color-note";
import { isFailedTab, isSuccessfullyResolvedTab, octaveToDots, ResolvedTab } from "./text2tab";

interface TabVisualisationProps {
    tab: ResolvedTab;
};

const commonStyles: CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 10,
};

export const TabVisualisation = ({tab}: TabVisualisationProps) => {
    return (
        <>
            { isFailedTab(tab) &&
                <span style={{ ...commonStyles, color: 'red' }}>{ tab.input }</span>
            }
            { isSuccessfullyResolvedTab(tab) && (
                Array.isArray(tab) ?
                    tab.map(t => <TabVisualisation tab={tab} />)
                : <span style={{ ...commonStyles, color: colorNote(tab) }}>{ tab.sign }{ octaveToDots(tab.octave) }</span>
            )}
        </>
    );
};

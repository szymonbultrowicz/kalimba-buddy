import React from "react";
import { isFailedTab, isSuccessfullyResolvedTab, octaveToDots, ResolvedTab } from "./text2tab";

interface TabVisualisationProps {
    tab: ResolvedTab;
};

export const TabVisualisation = ({tab}: TabVisualisationProps) => {
    return (
        <>
            { isFailedTab(tab) &&
                <span style={{ color: 'red' }}>{ tab.input }</span>
            }
            { isSuccessfullyResolvedTab(tab) && (
                Array.isArray(tab) ?
                    tab.map(t => <TabVisualisation tab={tab} />)
                : <span>{ tab.sign }{ octaveToDots(tab.octave) }</span>
            )}
        </>
    );
};

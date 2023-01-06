import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TabVisualisation } from "./TabVisualisation";
import { ResolvedTab, text2tab } from "./text2tab";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useAtom } from "jotai";

interface Song {
  title?: string;
  tabs: string;
}

const storage = createJSONStorage<Song>(() => localStorage);
const songAtom = atomWithStorage<Song>("song", { tabs: "" } as Song, storage);

export const Colorizer = () => {
  const [tabs, setTabs] = useState<Array<Array<ResolvedTab>>>([]);

  const [song, setSong] = useAtom(songAtom);

  useEffect(() => {
    setTabs(text2tab(song.tabs));
  }, [song]);

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <h2>Input your kalimba notes here</h2>
        <TextField
          multiline
          maxRows={10}
          value={song.tabs}
          onChange={(event) => setSong({ ...song, tabs: event.target.value })}
        />
      </Box>
      <Box>
        {tabs.map((row) => (
          <Box>
            {row.map((tab) => (
              <TabVisualisation tab={tab} />
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

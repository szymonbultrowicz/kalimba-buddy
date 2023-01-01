import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TabVisualisation } from "./TabVisualisation";
import { ResolvedTab, text2tab } from "./text2tab";

export const Colorizer = () => {
  const [input, setInput] = useState("");
  const [tabs, setTabs] = useState<Array<Array<ResolvedTab>>>([]);

  useEffect(() => {
    setTabs(text2tab(input));
  }, [input]);

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <h2>Input your kalimba notes here</h2>
        <TextField
          multiline
          maxRows={10}
          value={input}
          onChange={(event) => setInput(event.target.value)}
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

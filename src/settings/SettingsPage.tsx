import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useAtom } from "jotai";
import { NoteRepresentation, noteRepresentationAtom } from "./state";

export const SettingsPage = () => {
  const [noteRepresentation, setNoteRepresentation] = useAtom(
    noteRepresentationAtom
  );

  return (
    <>
      <FormControl>
        <FormLabel id="form-display-type">Display type</FormLabel>
        <RadioGroup
          aria-labelledby="form-display-type"
          name="display-type"
          value={noteRepresentation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNoteRepresentation(
              e.target.value as unknown as NoteRepresentation
            )
          }
        >
          <FormControlLabel
            value={NoteRepresentation.Numbers}
            control={<Radio />}
            label="Numbers"
          />
          <FormControlLabel
            value={NoteRepresentation.English}
            control={<Radio />}
            label="English (CDEFGAB)"
          />
          <FormControlLabel
            value={NoteRepresentation.German}
            control={<Radio />}
            label="German (CDEFGAH)"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

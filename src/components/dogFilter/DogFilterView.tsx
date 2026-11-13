import { styles } from "./DogFilterView.styles";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { DogFilterProps } from "./DogFilter.types";

function DogFilterView({
  filter,
  onChangeOption,
  getDogBreedLength,
}: DogFilterProps) {
  return (
    <Paper sx={styles.paper}>
      <RadioGroup
        row
        aria-label="dogLetter"
        name="dogLetter"
        onChange={onChangeOption}
      >
        {filter.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio color="primary" />}
            labelPlacement="bottom"
            label={
              <Box sx={styles.flex}>
                <Typography sx={styles.letter}>{item.toUpperCase()}</Typography>
                <Typography sx={styles.number}>
                  ({getDogBreedLength(item)})
                </Typography>
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </Paper>
  );
}

export default DogFilterView;

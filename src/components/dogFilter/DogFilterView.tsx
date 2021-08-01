import { useStyles } from "./DogFilterView.styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import { DogFilterProps } from "./DogFilter.types";

function DogFilterView({
  filter,
  onChangeOption,
  getDogBreedLength,
}: DogFilterProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
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
              <div className={classes.flex}>
                <Typography className={classes.letter}>
                  {item.toUpperCase()}
                </Typography>
                <Typography className={classes.number}>
                  ({getDogBreedLength(item)})
                </Typography>
              </div>
            }
          />
        ))}
      </RadioGroup>
    </Paper>
  );
}

export default DogFilterView;

import { ChangeEvent, FormEvent } from 'react';
import { useStyles } from './CreateBeerFormView.styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '../button/Button';
import { beerTypeList } from '../../mocks/BeerTypeMock';

interface Props {
  beerName: string;
  beerType: string;
  hasCorn: boolean;
  ingredients: string;
  onChangeInput: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onChangeCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

function CreateBeerFormView({ beerName, beerType, hasCorn, ingredients, onChangeInput, onChangeCheckbox, onSubmit }: Props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h1" className={classes.title}>
        Beer Form
      </Typography>

      <form onSubmit={onSubmit}>
        <div className={classes.container}>
          <TextField
            label="Beer name"
            name="beerName"
            variant="outlined"
            fullWidth
            value={beerName}
            onChange={onChangeInput}
          />
        </div>

        <div className={classes.container}>
          <TextField
            select
            label="Beer type"
            name="beerType"
            variant="outlined"
            fullWidth
            value={beerType}
            onChange={onChangeInput}
          >
            {beerTypeList.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className={classes.container}>
          <FormControlLabel
            label="Has corn"
            control={<Checkbox 
              color="primary"
              name="hasCorn"
              checked={hasCorn}
              onChange={onChangeCheckbox}
            />}
          />
        </div>

        <div className={classes.container}>
          <TextField
            label="Ingredients"
            name="ingredients"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={ingredients}
            onChange={onChangeInput}
          />
        </div>

        <div className={classes.button}>
          <Button
            label="Submit"
            disabled={!beerName || !beerType || !ingredients}
          />
        </div>
      </form>
    </Paper>
  )
}

export default CreateBeerFormView;

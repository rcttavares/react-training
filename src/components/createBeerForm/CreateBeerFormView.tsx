import Box from '@mui/material/Box';
import Button from '../button/Button';
import Checkbox from '@mui/material/Checkbox';
import { CreateBeerFormProps } from './CreateBeerForm.types';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { beerTypeList } from '../../mocks/BeerTypeList';
import { styles } from './CreateBeerFormView.styles';

function CreateBeerFormView({
  beerName,
  beerType,
  hasCorn,
  ingredients,
  onChangeInput,
  onChangeCheckbox,
  onSubmit,
}: CreateBeerFormProps) {
  return (
    <Paper sx={styles.paper}>
      <Typography variant='h5' component='h1' sx={styles.typography}>
        Beer Form
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={styles.container}>
          <TextField
            label='Beer name'
            name='beerName'
            variant='outlined'
            fullWidth
            value={beerName}
            onChange={onChangeInput}
          />
        </Box>

        <Box sx={styles.container}>
          <TextField
            select
            label='Beer type'
            name='beerType'
            variant='outlined'
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
        </Box>

        <Box sx={styles.container}>
          <FormControlLabel
            label='Has corn'
            control={
              <Checkbox
                color='primary'
                name='hasCorn'
                checked={hasCorn}
                onChange={onChangeCheckbox}
              />
            }
          />
        </Box>

        <Box sx={styles.container}>
          <TextField
            label='Ingredients'
            name='ingredients'
            variant='outlined'
            fullWidth
            multiline
            minRows={3}
            value={ingredients}
            onChange={onChangeInput}
          />
        </Box>

        <Box sx={styles.button}>
          <Button
            label='Submit'
            disabled={!beerName || !beerType || !ingredients}
          />
        </Box>
      </form>
    </Paper>
  );
}

export default CreateBeerFormView;

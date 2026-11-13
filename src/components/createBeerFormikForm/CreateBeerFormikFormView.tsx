import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '../button/Button';
import Checkbox from '@mui/material/Checkbox';
import { CreateBeerFormikFormProps } from './CreateBeerFormikForm.types';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { beerTypeList } from '../../mocks/BeerTypeList';
import { styles } from './CreateBeerFormikFormView.styles';

function CreateBeerFormikFormView({
  initialValues,
  onSubmit,
}: CreateBeerFormikFormProps) {
  const validationSchema = yup.object().shape({
    beerName: yup.string().required(),
    beerType: yup.string().required(),
    ingredients: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, isValid, dirty, handleChange, handleSubmit, errors }) => (
        <Paper sx={styles.paper}>
          <Typography variant='h5' component='h1' sx={styles.typography}>
            Beer Formik
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={styles.container}>
              <TextField
                label='Beer name'
                name='beerName'
                variant='outlined'
                fullWidth
                value={values.beerName}
                onChange={handleChange}
                helperText={errors.beerName}
              />
            </Box>

            <Box sx={styles.container}>
              <TextField
                select
                label='Beer type'
                name='beerType'
                variant='outlined'
                fullWidth
                value={values.beerType}
                onChange={handleChange}
                helperText={errors.beerType}
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
                    checked={values.hasCorn}
                    onChange={handleChange}
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
                value={values.ingredients}
                onChange={handleChange}
                helperText={errors.ingredients}
              />
            </Box>

            <Box sx={styles.button}>
              <Button label='Submit' disabled={!(isValid && dirty)} />
            </Box>
          </form>
        </Paper>
      )}
    </Formik>
  );
}

export default CreateBeerFormikFormView;

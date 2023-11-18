import * as yup from 'yup';

import Button from '../button/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { CreateBeerFormikFormProps } from './CreateBeerFormikForm.types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { beerTypeList } from '../../mocks/BeerTypeList';
import { useStyles } from './CreateBeerFormikFormView.styles';

function CreateBeerFormikFormView({
  initialValues,
  onSubmit,
}: CreateBeerFormikFormProps) {
  const classes = useStyles();

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
        <Paper className={classes.paper}>
          <Typography
            variant='h5'
            component='h1'
            className={classes.typography}
          >
            Beer Formik
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className={classes.container}>
              <TextField
                label='Beer name'
                name='beerName'
                variant='outlined'
                fullWidth
                value={values.beerName}
                onChange={handleChange}
                helperText={errors.beerName}
              />
            </div>

            <div className={classes.container}>
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
            </div>

            <div className={classes.container}>
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
            </div>

            <div className={classes.container}>
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
            </div>

            <div className={classes.button}>
              <Button label='Submit' disabled={!(isValid && dirty)} />
            </div>
          </form>
        </Paper>
      )}
    </Formik>
  );
}

export default CreateBeerFormikFormView;

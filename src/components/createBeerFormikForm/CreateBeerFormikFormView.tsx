import { Formik } from 'formik';
import * as yup from 'yup';
import { IBeerFormik } from '../../types/Types';
import { useStyles } from './CreateBeerFormikFormView.styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '../button/Button';
import { beerTypeList } from '../../mocks/BeerTypeMock';

const validationSchema = yup.object().shape({
  beerName: yup.string().required(),
  beerType: yup.string().required(),
  ingredients: yup.string().required()
})

interface Props {
  initialValues: IBeerFormik;
  onSubmit: (values: IBeerFormik, { resetForm }: any) => void;
}

function CreateBeerFormikFormView({ initialValues, onSubmit }: Props) {
  const classes = useStyles();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, isValid, dirty, handleChange, handleSubmit }) => (
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h1" className={classes.title}>
            Beer Formik
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className={classes.container}>
              <TextField
                label="Beer name"
                name="beerName"
                variant="outlined"
                fullWidth
                value={values.beerName}
                onChange={handleChange}
              />
            </div>

            <div className={classes.container}>
              <TextField
                select
                label="Beer type"
                name="beerType"
                variant="outlined"
                fullWidth
                value={values.beerType}
                onChange={handleChange}
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
                  checked={values.hasCorn}
                  onChange={handleChange}
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
                value={values.ingredients}
                onChange={handleChange}
              />
            </div>

            <div className={classes.button}>
              <Button
                label="Submit"
                disabled={!(isValid && dirty)}
              />
            </div>
          </form>
        </Paper>
      )}
    </Formik>
  )
}

export default CreateBeerFormikFormView;

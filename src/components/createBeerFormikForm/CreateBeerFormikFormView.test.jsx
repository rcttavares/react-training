import Button from '../button/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { beerTypeList } from '../../mocks/BeerTypeList';
import { shallow } from 'enzyme';
import { useStyles } from './CreateBeerFormikFormView.styles';

jest.mock('./CreateBeerFormikFormView.styles');

describe('CreateBeerFormikFormView', () => {
  beforeEach(() => {
    useStyles.mockReturnValue({
      paper: 'paper',
      typography: 'typography',
      container: 'container',
      button: 'button',
    });
  });

  const formikProps = {
    // Formik State
    values: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
    errors: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
    touched: {},
    isSubmitting: false,
    isValidating: false,
    submitCount: 1,
    // Formik Helpers
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn(),
    setTouched: jest.fn(),
    setValues: jest.fn(),
    setFieldValue: jest.fn(),
    setFieldError: jest.fn(),
    setFieldTouched: jest.fn(),
    validateForm: jest.fn(),
    validateField: jest.fn(),
    resetForm: jest.fn(),
    submitForm: jest.fn(),
    setFormikState: jest.fn(),
    // Formik Handlers
    handleSubmit: jest.fn(),
    handleReset: jest.fn(),
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
    getFieldProps: jest.fn(),
    getFieldMeta: jest.fn(),
    getFieldHelpers: jest.fn(),
    // Computed
    dirty: false,
    isValid: false,
    initialValues: {
      beerName: '',
      beerType: '',
      hasCorn: false,
      ingredients: '',
    },
    initialErrors: {},
    initialTouched: {},
    // Registered Field
    registerField: jest.fn(),
    unregisterField: jest.fn(),
  };

  it('should render correctly', () => {
    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={formikProps.initialValues}
        onSubmit={formikProps.submitForm}
      />
    );

    const formikWrapper = wrapper.find(Formik).renderProp('children')(
      formikProps
    );
    expect(
      formikWrapper.matchesElement(
        <Paper className='paper'>
          <Typography variant='h5' component='h1' className='typography'>
            Beer Formik
          </Typography>

          <form onSubmit={formikProps.handleSubmit}>
            <div className='container'>
              <TextField
                label='Beer name'
                name='beerName'
                variant='outlined'
                fullWidth
                value={formikProps.values.beerName}
                onChange={formikProps.handleChange}
                helperText={formikProps.errors.beerName}
              />
            </div>

            <div className='container'>
              <TextField
                select
                label='Beer type'
                name='beerType'
                variant='outlined'
                fullWidth
                value={formikProps.values.beerType}
                onChange={formikProps.handleChange}
                helperText={formikProps.errors.beerType}
              >
                {beerTypeList.map((item) => (
                  <MenuItem key={item.id} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className='container'>
              <FormControlLabel
                label='Has corn'
                control={
                  <Checkbox
                    color='primary'
                    name='hasCorn'
                    checked={formikProps.values.hasCorn}
                    onChange={formikProps.handleChange}
                  />
                }
              />
            </div>

            <div className='container'>
              <TextField
                label='Ingredients'
                name='ingredients'
                variant='outlined'
                fullWidth
                multiline
                minRows={3}
                value={formikProps.values.ingredients}
                onChange={formikProps.handleChange}
                helperText={formikProps.errors.ingredients}
              />
            </div>

            <div className='button'>
              <Button
                label='Submit'
                disabled={!(formikProps.isValid && formikProps.dirty)}
              />
            </div>
          </form>
        </Paper>
      )
    ).toBe(true);
  });

  it('should have submit button disabled', () => {
    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={formikProps.initialValues}
        onSubmit={formikProps.submitForm}
      />
    );

    const buttonWrapper = wrapper.find(Formik).dive().find(Button);
    expect(buttonWrapper.prop('disabled')).toBe(true);
  });
});

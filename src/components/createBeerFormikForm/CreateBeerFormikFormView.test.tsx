import React from 'react';
import { shallow } from 'enzyme';
import { Formik, FormikErrors, FormikHandlers, FormikState, FormikTouched, FormikValues } from 'formik';
import * as yup from 'yup';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { useStyles } from './CreateBeerFormikFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

jest.mock('./CreateBeerFormikFormView.styles');

describe('CreateBeerFormikFormView', () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      "paper": "paper",
      "title": "title",
      "container": "container",
      "button": "button"
    });
  });

  it('should render correctly', () => {
    const validationSchema = yup.object().shape({
      beerName: yup.string().required(),
      beerType: yup.string().required(),
      ingredients: yup.string().required()
    })

    const emptyValues = {
      beerName: '',
      beerType: '',
      hasCorn: false,
      ingredients: ''
    }
    
    const onSubmitMock = jest.fn();

    const error: FormikErrors<FormikValues> = {
      beerName: '',
      beerType: '',
      hasCorn: '',
      ingredients: 'teste'
    }

    const touch: FormikTouched<FormikValues> = {
      beerName: false,
      beerType: false,
      hasCorn: false,
      ingredients: true
    }

    const formikHandlers = {
      getFieldHelpers: jest.fn(),
      getFieldMeta: jest.fn(),
      getFieldProps: jest.fn(),
      handleBlur:  jest.fn(),
      handleChange: jest.fn(),
      handleReset: jest.fn(),
      handleSubmit: jest.fn()
    } as FormikHandlers

    const propsFormik = {
      onSubmit: jest.fn(),
      handleChange: jest.fn(),
      errors: error,
      touched: touch,
      values: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      isSubmitting: false,
      isValidatting: false,
      submitCount: 1
    } as unknown as FormikState<FormikValues>

    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={emptyValues}
        onSubmit={onSubmitMock}
      />
    );

    const formWrapper = wrapper.renderProp('children')({ ...propsFormik, ...formikHandlers });
    expect(formWrapper.find('#title').text()).toEqual('Beer Formik');

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          <h1 className="title">Beer Formik</h1>

          <Formik
            validationSchema={validationSchema}
            initialValues={emptyValues}
            onSubmit={onSubmitMock}
          >
            {({ values, isValid, dirty, handleSubmit, handleChange, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <TextField
                    label="Beer name"
                    name="beerName"
                    variant="outlined"
                    fullWidth
                    value={values.beerName}
                    onChange={handleChange}
                  />
                </div>
    
                <div className="container">
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Beer type</InputLabel>
                    <Select
                      label="Beer type"
                      name="beerType"
                      value={values.beerType}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Ale</MenuItem>
                      <MenuItem value={2}>Lager</MenuItem>
                      <MenuItem value={3}>Stout</MenuItem>
                      <MenuItem value={4}>Malt</MenuItem>
                    </Select>
                  </FormControl>
                </div>
    
                <div className="container">
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Has corn"
                    name="hasCorn"
                    checked={values.hasCorn}
                    onChange={() => setFieldValue('hasCorn', !values.hasCorn)}
                  />
                </div>
    
                <div className="container">
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
    
                <div className="button">
                  <ButtonView
                    label="Submit"
                    disabled={!(isValid && dirty)}
                  />
                </div>
              </form>
            )}
          </Formik>
        </Paper>
      )
    ).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Formik, FormikErrors, FormikTouched, FormikValues } from 'formik';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { useStyles } from './CreateBeerFormikFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
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

  it('should render correctly the Formik', () => {
    const emptyValues = {
      beerName: '',
      beerType: '',
      hasCorn: false,
      ingredients: ''
    };

    const onSubmitMock = jest.fn();

    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={emptyValues}
        onSubmit={onSubmitMock}
      />
    );

    const error: FormikErrors<FormikValues> = {
      beerName: '',
      beerType: '',
      hasCorn: '',
      ingredients: 'teste'
    };

    const touch: FormikTouched<FormikValues> = {
      beerName: false,
      beerType: false,
      hasCorn: false,
      ingredients: true
    };

    const formikProps = {
      values: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      errors: error,
      touched: touch,
      isSubmitting: false,
      isValidating: false,
      submitCount: 1,
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
      handleSubmit: jest.fn(),
      handleReset: jest.fn(),
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      getFieldProps: jest.fn(),
      getFieldMeta: jest.fn(),
      getFieldHelpers: jest.fn(),
      dirty: false,
      isValid: false,
      initialValues: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      initialErrors: { beerName: '', beerType: '', hasCorn: '', ingredients: 'teste' },
      initialTouched: { beerName: false, beerType: false, hasCorn: false, ingredients: true },
      registerField: jest.fn(),
      unregisterField: jest.fn()
    };

    const formik = wrapper.find(Formik).renderProp('children')(formikProps);

    expect(
      formik.matchesElement(
        <form>
          <div className="container">
            <TextField
              label="Beer name"
              name="beerName"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="container">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Beer type</InputLabel>
              <Select
                label="Beer type"
                name="beerType"
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
            />
          </div>

          <div className="button">
            <ButtonView
              label="Submit"
            />
          </div>
        </form>
      )
    ).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { useStyles } from './CreateBeerFormikFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

jest.mock('./CreateBeerFormikFormView.styles');

describe('CreateBeerFormikFormView', () => {
  beforeEach(() => {
    (useStyles).mockReturnValue({
      "paper": "paper",
      "title": "title",
      "container": "container",
      "button": "button"
    });
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={{ beerName: '', beerType: '', hasCorn: false, ingredients: '' }}
        onSubmit={jest.fn()}
      />
    );

    expect(
      wrapper.find('h1').matchesElement(
        <h1 className="title">Beer Formik</h1>
      )
    ).toBe(true);
  });

  it('should render correctly the Formik', () => {
    const formikProps = {
      // Formik State
      values: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      errors: {},
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
      initialValues: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      initialErrors: {},
      initialTouched: {},
      // Registered Field
      registerField: jest.fn(),
      unregisterField: jest.fn()
    };

    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={{ beerName: '', beerType: '', hasCorn: false, ingredients: '' }}
        onSubmit={jest.fn()}
      />
    );

    const formikWrapper = wrapper.find(Formik).renderProp('children')(formikProps);
    expect(
      formikWrapper.matchesElement(
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

  it("should have submit button disabled", () => {
    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={{ beerName: '', beerType: '', hasCorn: false, ingredients: '' }}
        onSubmit={jest.fn()}
      />
    );

    const buttonWrapper = wrapper.find(Formik).dive().find(ButtonView);
    expect(buttonWrapper.prop("disabled")).toBe(true);
  });

  it('should turn hasCorn to true when onChange is called', () => {
    const formikProps = {
      // Formik State
      values: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      errors: {},
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
      initialValues: { beerName: '', beerType: '', hasCorn: false, ingredients: '' },
      initialErrors: {},
      initialTouched: {},
      // Registered Field
      registerField: jest.fn(),
      unregisterField: jest.fn()
    };

    const wrapper = shallow(
      <CreateBeerFormikFormView
        initialValues={{ beerName: '', beerType: '', hasCorn: false, ingredients: '' }}
        onSubmit={jest.fn()}
      />
    );

    const formControlLabelWrapper = wrapper.find(Formik).renderProp('children')(formikProps).find(FormControlLabel);
    formControlLabelWrapper.invoke('onChange')({target: { name: "hasCorn", checked: true }});
    expect(formikProps.setFieldValue).toHaveBeenCalledWith('hasCorn', true);
  });
});

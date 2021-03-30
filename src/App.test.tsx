import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Grid } from '@material-ui/core';
import DogWrapper from './components/dogWrapper/DogWrapper';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <App />
    );

    expect(
      wrapper.matchesElement(
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DogWrapper />
          </Grid>
          <Grid item xs={6}>
            <CreateBeerForm />
          </Grid>
          <Grid item xs={6}>
            <CreateBeerFormikForm />
          </Grid>
        </Grid>
      )
    ).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';
import { Grid } from '@material-ui/core';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <App />
    );

    expect(
      wrapper.matchesElement(
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DogDetails />
            </Grid>
            <Grid item xs={6}>
              <CreateBeerForm />
            </Grid>
            <Grid item xs={6}>
              <CreateBeerFormikForm />
            </Grid>
          </Grid>
        </div>
      )
    ).toBe(true);
  });
});

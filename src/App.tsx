import React from 'react';
import { Grid } from '@material-ui/core';
import DogWrapper from './components/dogWrapper/DogWrapper';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';

function App() {
  return (
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
  );
}

export default App;

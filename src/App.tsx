import React from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import DogList from './components/dogList/DogList';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <DogDetails />
        </Grid>
        <Grid item xs={8}>
          <DogList />
        </Grid>
        <Grid item xs={6}>
          <CreateBeerForm />
        </Grid>
        <Grid item xs={6}>
          <CreateBeerFormikForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

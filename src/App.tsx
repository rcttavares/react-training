import React, { useState } from 'react';
import { useStyles } from './App.styles';
import { CircularProgress, Grid } from '@material-ui/core';
import DogDetails from './components/dogDetails/DogDetails';
import DogList from './components/dogList/DogList';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';
import { Dog } from './types/DogListType';
import { getBreeds } from './services/DogListService';

function App() {
  const classes = useStyles();

  const [dogList, setDogList] = useState<Dog[]>([]);
  const [selectedDog, setSelectedDog] = useState<Dog>({} as Dog);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    setLoading(true);

    const result = await getBreeds();
    setDogList(result);

    setLoading(false);
  };

  const onSelectDog = (breed: string) => {
    const selectedBreed = dogList.find((dog) => dog.name.toLowerCase() === breed.toLowerCase());
    if (!selectedBreed) return;
    setSelectedDog(selectedBreed);
  };

  const onScold = () => {
    const scoldedBreed = dogList.map((dog) => {
      if (dog.name.toLowerCase() === selectedDog.name.toLowerCase())
        return { ...dog, scolded: dog.scolded + 1 };
      return dog;
    });

    setDogList(scoldedBreed);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress className={classes.loading} />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <DogDetails
              name={selectedDog?.name}
              image={selectedDog?.image}
              onScold={onScold}
              disabled={!selectedDog.name}
            />
          </Grid>
          <Grid item xs={8}>
            <DogList
              dogList={dogList}
              selectedDog={selectedDog}
              onSelectDog={onSelectDog}
            />
          </Grid>
          <Grid item xs={6}>
            <CreateBeerForm />
          </Grid>
          <Grid item xs={6}>
            <CreateBeerFormikForm />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;

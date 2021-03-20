import React, { useState } from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import DogList from './components/dogList/DogList';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';
import { Grid } from '@material-ui/core';
import { Dog } from './types/DogListType';
import { getBreeds } from './services/DogListService';

function App() {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [selectedDog, setSelectedDog] = useState<Dog>({} as Dog);

  React.useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const result = await getBreeds();
    setDogList(result);
  };

  const onSelectDog = (breed: string) => {
    const selectedBreed = dogList.find((dog) => dog.name.toLowerCase() === breed.toLowerCase());
    if (!selectedBreed) return;
    setSelectedDog(selectedBreed);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <DogDetails name={selectedDog?.name} image={selectedDog?.image} />
        </Grid>
        <Grid item xs={8}>
          <DogList dogList={dogList} selectedDog={selectedDog} onSelectDog={onSelectDog} />
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

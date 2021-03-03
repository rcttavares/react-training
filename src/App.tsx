import React from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikForm from './components/createBeerFormikForm/CreateBeerFormikForm';

function App() {
  return (
    <>
      <div>
        <DogDetails />
      </div>

      <div style={{ marginTop: 20}}>
        <CreateBeerForm />
      </div>

      <div style={{ marginTop: 20}}>
        <CreateBeerFormikForm />
      </div>
    </>
  );
}

export default App;

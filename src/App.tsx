import React from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm';
import CreateBeerFormikFormView from './components/createBeerFormikForm/CreateBeerFormikFormView';

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
        <CreateBeerFormikFormView />
      </div>
    </>
  );
}

export default App;

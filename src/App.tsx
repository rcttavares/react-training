import React from 'react';
import DogDetails from './components/dogDetails/DogDetails';
import CreateBeerFormView from './components/createBeerForm/CreateBeerFormView';
import CreateBeerFormikFormView from './components/createBeerFormikForm/CreateBeerFormikFormView';

function App() {
  return (
    <>
      <div>
        <DogDetails />
      </div>

      <div style={{ marginTop: 20}}>
        <CreateBeerFormView />
      </div>

      <div style={{ marginTop: 20}}>
        <CreateBeerFormikFormView />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import Button from './components/Button/Button';
import DogDetails from './components/DogDetails/DogDetails';

function App() {
  return (
    <>
      <div style={{ margin: 15 }}>
        <Button onClick={() => alert('Clicked!')}>
          Click here!
        </Button>
      </div>
      <div style={{ margin: 15 }}>
        <DogDetails></DogDetails>
      </div>
    </>
  );
}

export default App;

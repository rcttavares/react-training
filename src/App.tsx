import React, { useCallback } from 'react';
import { useSnackbar } from 'notistack';
//import Button from './components/Button/Button';
import DogDetails from './components/DogDetails/DogDetails';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const onBark = useCallback(() => {
    enqueueSnackbar("Woof! Uau!", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center"
      },
    }
  )},[enqueueSnackbar])

  return (
    <>
      {/* <div style={{ margin: 15 }}>
        <Button label="Click here!" onClick={() => alert('Clicked!')} />
      </div> */}
      <div style={{ margin: 15 }}>
        <DogDetails 
          name="Buddy"
          image="https://www.azpetshop.com.br/blog/wp-content/uploads/2018/06/french-bulldog-summer-smile-joy-160846-805x452.jpeg"
          onBark={onBark}
        />
      </div>
    </>
  );
}

export default App;

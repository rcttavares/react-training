import React, { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import DogDetailsView from './components/dogDetails/DogDetailsView';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const [count, setCount] = useState(0);

  const scold = useCallback(() => {
    setCount(count + 1)
  },[count])

  const bark = useCallback(() => {
    enqueueSnackbar("Woof! Woof!", {
      anchorOrigin: {
        vertical: "top",
        horizontal: "center"
      },
    }
  )},[enqueueSnackbar])

  return (
    <>
      <div style={{ margin: 15 }}>
        <DogDetailsView 
          name="Buddy"
          image="https://www.azpetshop.com.br/blog/wp-content/uploads/2018/06/french-bulldog-summer-smile-joy-160846-805x452.jpeg"
          onScold={scold}
          onBark={bark}
        />
        <p>Scold: {count}</p>
      </div>
    </>
  );
}

export default App;

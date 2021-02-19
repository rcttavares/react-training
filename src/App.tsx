import React from 'react';
import Button from './components/button/Button';

function App() {
  return (
    <div style={{ margin: 15 }}>
      <Button onClick={() => alert('Clicked!')}>
        Click here!
      </Button>
    </div>
  );
}

export default App;

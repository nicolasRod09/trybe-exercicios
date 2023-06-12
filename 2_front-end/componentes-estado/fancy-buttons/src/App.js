import React from 'react';
import './App.css';

const handleClick = () => {
  console.log('clicou');
}

class App extends React.Component {
  render() {
    return (
      <button onClick={handleClick}>Clicar</button>
    );
  }
}

export default App;

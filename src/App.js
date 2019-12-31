import React from 'react'
import './App.css'
import Controls from './components/Controls'
import IpsumDisplay from './components/IpsumDisplay'

const App = () => {

  return (
    <div className="App">
      <header>Y Ipsum</header>
      <Controls />
      <main>
        <IpsumDisplay />
      </main>
    </div>
  );
}

export default App;

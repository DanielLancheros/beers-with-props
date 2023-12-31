import Header from './components/Header';
import BeerList from './components/BeerList';
import './App.css';
import { useState } from 'react';

function App() {
  const [showBeers, setShowBeers] = useState(true);
  return (
    <>
      <Header />
      {showBeers && <BeerList />}
      <button onClick = {() => setShowBeers(!showBeers)}>Boss Mode</button>
    </>
  );
}

export default App;

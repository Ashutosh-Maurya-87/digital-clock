import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const ttime= new Date().toLocaleTimeString();
  const [time,setTime]=useState(ttime);
  const getTime = () =>{
    console.log(time);
    console.log('you click')
  }
  return (
    <>
    <h1>{time}</h1>
    <button onClick={getTime}>Get Time  t</button>
    </>
  );
}

export default App;

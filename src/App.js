import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const time= new Date().toLocaleTimeString();
  const [timeNew,setTimeNew]=useState(' ');
  const getTime = () =>{
    const timeNew= new Date().toLocaleTimeString();
    setTimeNew(timeNew);
    console.log(time);
    console.log('you click')
  }
  return (
    <>
    <h1>{timeNew}</h1>
    <button onClick={getTime}>Get Time  </button>
    <h3>Click this button to find the local time</h3>
    </>
  );
}

export default App;

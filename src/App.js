import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const time= new Date().toLocaleTimeString();
  const [timeNew,setTime]=useState(' ');
  const getTime = () =>{
    const timeNew= new Date().toLocaleTimeString();
    setTime(timeNew);
    console.log(time);
    console.log('you click')
  }
  return (
    <>
    <h1>{timeNew}</h1>
    <button onClick={getTime}>Get Time  </button>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const getTime = () =>{
    console.log('you click')
  }
  return (
    <>
    <h1>time</h1>
    <button onClick={getTime}>Get Time  t</button>
    </>
  );
}

export default App;

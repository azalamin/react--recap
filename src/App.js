import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setNayoks(data)
    })
  }, [])
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <h1>Number of Users: {nayoks.length}</h1>
      {
        nayoks.map(nayok => <Nayok name={nayok.name} email={nayok.email} address={nayok.address.city} key={nayok.id}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add movie</button>
      <h3>Number of Movies: {count}</h3>
      <DisplayMovies movies={count}></DisplayMovies>
      <DisplayMovies movies={count + 10}></DisplayMovies>
      <DisplayMovies movies={count + 2}></DisplayMovies>
      <DisplayMovies movies={count + 5}></DisplayMovies>
    </div>
  )
}

function DisplayMovies(props){
  return <h2>Movies I have acted: {props.movies}</h2>
}

function Nayok(props){
  const nayokStyle ={
    border: '2px solid purple',
    margin: '10px',
  }
  return (
    <div style={nayokStyle}>
      <h1>I am actor {props.name}</h1>
      <h3>Email: {props.email}</h3>
      <h4>Address: {props.address}</h4>
    </div>
  )
}
export default App;

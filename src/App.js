import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learning React is Fun So Far!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>React is so Cool! And makes JS more fun!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>I</li>
          <li>Like</li>
          <li>React</li>
          <li>A</li>
          <li>Lot</li>
          <li>!!!</li>
        </ul>
      </header>
    </div>
  ); 
}

export default App;

import logo from './logo.svg';
import './App.css';


// let spacejams = require('./SpaceJams');
import SpaceJams from './SpaceJams';

// function render () {
//   $for('#app').append(`
  
//   `) 
// }



function App() {
  let bootcampName = 'P';
  // JSX
  // Javascript extended
  // JSX code is  "compiled" into JS code by React
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpaceJams/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"  /**  Open the link in a new window */
          rel="noopener noreferrer"
        >
          {/* Variable interpolation */}
          {/* Comments go here! */}
          Learn React at {bootcampName} for fun at profit 💰
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { fas,faMugHot } from '@fortawesome/free-solid-svg-icons';

library.add(fas,faGithub)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FAIcon icon="coffee"/> */}
          <FAIcon icon={faMugHot}/>
          <FAIcon icon={faGithub}/>
          <FAIcon icon="github"/>
          <FAIcon icon={["fab","apple"]}/>
          <FAIcon icon={["fas","search"]}/>
          <FAIcon icon="horse"/>
          <FAIcon icon="fa-brands fa-airbnb"/>
        </a>
      </header>
    </div>
  );
}


export default App;

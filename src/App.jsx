import './styles/App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Header } from './components/Header';

library.add(fas,fab);

function App() {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}


export default App;

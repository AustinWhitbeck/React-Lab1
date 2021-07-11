import React from 'react';
import AdDesigner from './AdDesigner/AdDesigner';
import Header from './Header/Header';
import Votes from './Votes/Votes';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="SubSectionsMain">
          <AdDesigner/>
          <Votes/>
        </section>
    </div>
  );
}

export default App;

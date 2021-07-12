import React from 'react';
import AdDesigner from './AdDesigner/AdDesigner';
import Ad from './Ad/Ad';
import Header from './Header/Header';
import Votes from './Votes/Votes';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header user="Austin"/>
        <section className="adsContainer">
          <Ad flavor="Strawberry" fontSize={20} darkTheme={false}/>
          <Ad flavor="Chocolate" fontSize={60} darkTheme={true}/>
          <Ad flavor="Blueberry" fontSize={30} darkTheme={false}/>
        </section>
        <section className="SubSectionsMain">
          <AdDesigner/>
          <Votes/>
        </section>
    </div>
  );
}

export default App;

import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Tracker from './contents/Tracker';


function App() {
  return (
    <HashRouter>
 		  <div>
         <Header/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/tracking" component={Tracker}/>
          </div>
          <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;

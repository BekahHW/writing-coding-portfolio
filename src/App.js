import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Writing from './components/Writing'
import Coding from './components/Coding'
import VennDiagram from './components/VennDiagram'


const App = () => (
  <div className="App">

    <Router>
      <React.Fragment>
        <NavBar />

        <Route exact path="/writing" component={Writing} />
        <Route exact path="/coding" component={Coding} />

      </React.Fragment>
    </Router>

  </div>
)

export default App

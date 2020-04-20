import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
            </div>
        </Router>
    );
}

export default App;

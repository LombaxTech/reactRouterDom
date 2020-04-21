import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import Toy from './Components/Toy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/product" component={Product} />
                    <Route path="/shop/:id" component={Toy} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <h1>Home</h1>
)

const Product = () => (
    <h2>Product</h2>
)

export default App;

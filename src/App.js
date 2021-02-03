import './App.css';
import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="app">
                <Header/>

                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

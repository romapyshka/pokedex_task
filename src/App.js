import './App.css';
// import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Test from "./Test";
import React, { useState, useEffect } from 'react';
import {getAllPokemon} from "./services/GetPokemon";



function App() {
    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL);
            console.log(response);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <h1>Data fetch</h1>}
        </div>
        // {/*<Router>*/}
        // {/*    <div className="app">*/}
        // {/*        <Header/>*/}
        //
        // {/*        <Switch>*/}
        // {/*            <Route path="/">*/}
        // {/*                <Home/>*/}
        // {/*            </Route>*/}
        // {/*            <Route path="/test">*/}
        // {/*                <Test/>*/}
        // {/*            </Route>*/}
        // {/*        </Switch>*/}
        // {/*    </div>*/}
        // {/*</Router>*/}
    );
}

export default App;

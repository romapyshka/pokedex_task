import React, { useState, useEffect } from 'react';
import "./Home.css";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import {getAllPokemon, getPokemon} from "./services/GetPokemon";

function Home() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL);
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);

    const loadPokemon = async (data) => {
        let pokemonDataAll = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord
        }));
        setPokemonData(pokemonDataAll);
    };
    console.log(pokemonData);
    return (
        <div className="home">
            <div className="home_left">

                <div className="home_row">
                    {pokemonData.map((pokemon, i) => {
                        return <Pokemon key={i} pokemon={pokemon}/>
                    })}
                </div>

            </div>
            <div className="home_right">
                    <PokemonDetails/>
            </div>
        </div>
    );
}

export default Home;
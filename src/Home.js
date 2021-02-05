import React, {useEffect, useState} from 'react';
import "./Home.css";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import {getAllPokemon, getPokemon} from "./services/GetPokemon";

function Home() {
    const [pokemonData, setPokemonData] = useState([]);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL);
            await loadPokemon(response.results);
        }

        fetchData();
    }, []);

    const loadPokemon = async (data) => {
        let pokemonDataAll = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url)
        }));
        setPokemonData(pokemonDataAll);
    };

    // console.log(pokemonData);

    return (
        <div className="home">
            <div className="home_left">

                <div className="home_row">
                    {pokemonData.map((pokemon, i) => {
                        return (
                            <Pokemon key={pokemon.id} pokemon={pokemon}/>
                        )
                    })}
                </div>


            </div>
            <div className="home_right">
                <PokemonDetails />
            </div>
        </div>
    );
}

export default Home;
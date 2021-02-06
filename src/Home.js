import React, {useEffect, useState} from 'react';
import "./Home.css";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";
import {getAllPokemon, getPokemon} from "./services/GetPokemon";

function Home() {
    const [pokemonDataOne, setPokemonDataOne] = useState([]);
    const [pokemonDataTwo, setPokemonDataTwo] = useState([]);
    const [pokemonDataThree, setPokemonDataThree] = useState([]);
    const [loadMore, setLoadMore] = useState('');
    const [checkerMore, setCheckerMore] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL);
            setLoadMore(response.next);
            await loadPokemonOne(response.results);
        }

        fetchData();
    }, []);

    const loadPokemonOne = async (data) => {
        let pokemonDataAll = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url)
        }));
        setPokemonDataOne(pokemonDataAll);
    };

    const loadPokemonTwo = async (data) => {
        let pokemonDataAll = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url);
        }));
        setPokemonDataTwo(pokemonDataAll);
        setCheckerMore(false);
    };

    const loadPokemonThree = async (data) => {
        let pokemonDataAll = await Promise.all(data.map(async pokemon => {
            return await getPokemon(pokemon.url);
        }));
        setPokemonDataThree(pokemonDataAll);
        setCheckerMore(true);
    };


    const nextTwo = async () => {
        let data = await getAllPokemon(loadMore);
        await loadPokemonTwo(data.results);
        setLoadMore(data.next);
    };

    const nextThree = async () => {
        let data = await getAllPokemon(loadMore);
        await loadPokemonThree(data.results);
        setLoadMore(data.next);
    };


    const loadMorePokemon = async () => {
        if (checkerMore === true) {
            nextTwo();
        } else if (checkerMore === false) {
            nextThree();
            document.getElementById("morePokemon").hidden = true;
        }
    };


    return (
        <div className="home">
            <div className="home_left">

                <div className="home_row">
                    {pokemonDataOne.map((pokemon, i) => {
                        return (
                            <Pokemon key={i} pokemon={pokemon}/>
                        )
                    })}
                </div>
                <div className="home_row">
                    {pokemonDataTwo.map((pokemon, i) => {
                        return (
                            <Pokemon key={i} pokemon={pokemon}/>
                        )
                    })}
                </div>
                <div className="home_row">
                    {pokemonDataThree.map((pokemon, i) => {
                        return (
                            <Pokemon key={i} pokemon={pokemon}/>
                        )
                    })}
                </div>

                <button id="morePokemon" className="home_button" onClick={loadMorePokemon}><p>Load More</p></button>


            </div>
            <div className="home_right">
                <PokemonDetails/>
            </div>
        </div>
    );
}

export default Home;


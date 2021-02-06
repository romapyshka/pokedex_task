import React, {useState, useEffect} from "react";
import "./Pokemon.css";
import PokemonsPowersColor from "./services/PokemonsPowersColor"
import {getAllPokemon} from "./services/GetPokemon";

function Pokemon({pokemon}) {
    return (
        <div className={pokemon.id}>
            <div className="pokemon">
                <img src={pokemon.sprites.front_default} alt=""/>
                <div className="pokemon_info">
                    <div className="pokemon_name">
                        <p> {pokemon.name}</p>
                    </div>

                    <div className="pokemon_powers">
                        {pokemon.types.map(type => {
                            return <div className="pokemon_power"
                                        style={{backgroundColor: PokemonsPowersColor[type.type.name]}}> {type.type.name} </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
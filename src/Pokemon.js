import React from "react";
import "./Pokemon.css";

function Pokemon({pokemon}) {
    return (
        <div className="pokemon">
            <img src={pokemon.sprites.front_default} alt=""/>
            <div className="pokemon_info">
                <div className="pokemon_name">
                    <p> {pokemon.name} </p>
                </div>

                <div className="pokemon_powers">
                    {pokemon.types.map(type => {
                        return <div className="pokemon_power"> {type.type.name} </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
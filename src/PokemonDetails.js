import React from "react";
import "./PokemonDetails.css";

function PokemonDetails() {
    return (
        <div className="pokemon_details">
            <div className="pokemon_oneCard">
                <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pokemon-pikachu-neon-i71936.jpg" alt=""/>
                <h2>Name #005</h2>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Fire</th>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>Defence</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>HP</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>SP Attack</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>SP Defense</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <th>00</th>
                    </tr>
                    <tr>
                        <th>Total moves</th>
                        <th>00</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default PokemonDetails;
import React from "react";
import "./PokemonDetails.css";

function PokemonDetails() {

    return (
        <div className="pokemon_details">
            <div className="pokemon_oneCard">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""/>
                <h2>
                    Pikachu
                </h2>
                <table>
                    <tbody>
                    <tr>
                        <th>Type</th>
                        <th>Ground Fairy</th>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <th>35</th>
                    </tr>
                    <tr>
                        <th>Defence</th>
                        <th>40</th>
                    </tr>
                    <tr>
                        <th>HP</th>
                        <th>35</th>
                    </tr>
                    <tr>
                        <th>SP Attack</th>
                        <th>50</th>
                    </tr>
                    <tr>
                        <th>SP Defense</th>
                        <th>50</th>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <th>90</th>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <th>6.0 kg</th>
                    </tr>
                    <tr>
                        <th>Total moves</th>
                        <th>320</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PokemonDetails;
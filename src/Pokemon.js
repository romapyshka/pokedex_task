import React from "react";
import "./Pokemon.css";

function Pokemon() {
    return (
        <div className="pokemon">
            <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pokemon-pikachu-neon-i71936.jpg" alt=""/>
            <div className="pokemon_info">
                <p> Name </p>

                <div className="pokemon_power">
                    99999
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
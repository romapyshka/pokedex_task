import React from "react";
import "./Pokemon.css";

function Pokemon() {
    return (
        <div className="pokemon">

            <div className="pokemon_info">
                <p> PikaPika </p>
                <p className="pokemon_price">
                    <small>$</small>
                    <strong> 12213 </strong>
                </p>

                <div className="pokemon_rating">
                    99999
                </div>
            </div>

            <img src="https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pokemon-pikachu-neon-i71936.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    );
}

export default Pokemon;
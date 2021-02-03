import React from "react";
import "./Home.css";
import Pokemon from "./Pokemon";
import PokemonDetails from "./PokemonDetails";

function Home() {
    return (
        <div className="home">
            <div className="home_left">
                <div className="home_row">
                    <Pokemon/>
                    <Pokemon/>
                    <Pokemon/>
                </div>
                <div className="home_row">
                    <Pokemon/>
                    <Pokemon/>
                    <Pokemon/>
                </div>
                <div className="home_row">
                    <Pokemon/>
                    <Pokemon/>
                    <Pokemon/>
                </div>
                <div className="home_row">
                    <Pokemon/>
                    <Pokemon/>
                    <Pokemon/>
                </div>
            </div>
            <div className="home_right">
                    <PokemonDetails/>
            </div>
        </div>
    );
}

export default Home;
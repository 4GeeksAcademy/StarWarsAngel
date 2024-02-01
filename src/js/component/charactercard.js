import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Charactercard = () => {
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState(store.characters)
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])

    actions.getCharactersdetails(characters.url)

    console.log(store.charactersDetails, "Hello")

    /*const getCharacterImageUrl = (charactersId) => {
        return `https://starwars-visualguide.com/assets/img/characters/${charactersId}.jpg`;
      };*/

    return (

        <div className="container">
            <h2 className="text-danger mb-3">Characters</h2>
            <div className="row">
                {store.characters && store.characters.length > 0 && store.characters.map((item, id) => (
                    <div className="col md-4" key={id}>
                        <div className="card mb-5 d-inline-block">
                            <img src="" style={{ width:"200px", height:"250px" }} className="card-img-top" alt="Contact Avatar" />
                            <div className="card-body">
                                <h6><b>Nombre:</b> {item.name}</h6>
                                <h6><b>Genero:</b> </h6>
                                <h6><b>Hair color:</b> </h6>
                                <div className="d-flex justify-content-between">
                                    <Link to="/characters">
                                        <button className="btn bg-success"><h6 className="text-white">Learn More</h6></button>
                                    </Link>
                                    <button className="btn btn-white" onClick={() => actions.addFavoritos("Nuevo Favorito")}>
                                        ❤️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



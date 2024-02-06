import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// ... (código anterior)

export const Charactercard = () => {
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState(store.characters);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        actions.getCharactersdetails(characters.url);
    }, [actions, store.characters]);

    const handleToggleFavorite = (nombre) => {
        actions.añadirAFavorito(nombre);
    };


    const getCharacterImageUrl = (charactersId) => {
        return `https://starwars-visualguide.com/assets/img/characters/${charactersId}.jpg`;
    };

    return (
        <div className="container">
            <h2 className="text-danger mb-4 d-flex">Characters</h2>
            <div className="row">
                {store.characters && store.characters.length > 0 && store.characters.map((item, id) => (
                    <div className="col md-4" key={id}>
                        <div className="card mb-5 d-inline-block">
                            <img src={getCharacterImageUrl(id + 1)} style={{ width:"200px", height:"250px" }} className="card-img-top" alt="Contact Avatar" />
                            <div className="card-body">
                                <h6><b>Nombre:</b> {item.name}</h6>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/characterdetails/characters/${item.uid}`}>
                                        <button className="badge rounded-pill bg-dark text-white mt-2">Learn More</button>
                                    </Link>
                                    <button className="btn btn-white" onClick={() => handleToggleFavorite(item.name)}>
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



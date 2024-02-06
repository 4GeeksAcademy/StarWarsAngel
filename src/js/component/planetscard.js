import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetscard = () => {
    const { store, actions } = useContext(Context);

    const handleToggleFavorite = (nombre) => {
        actions.añadirAFavorito(nombre);
    };

    const getPlanetsImageUrl = (planetsId) => {
        return `https://starwars-visualguide.com/assets/img/planets/${planetsId}.jpg`;
    };

    return (

        <div className="container">
            <h2 className="text-danger mb-4 d-flex">Planets</h2>
            <div className="row">
                {store.planets && store.planets.length > 0 && store.planets.map((item, id) => (
                    <div className="col md-4" key={id}>
                        <div className="card mb-5 d-inline-block">
                            <img src={getPlanetsImageUrl(id + 1)} style={{ width: "210px", height: "215px" }} className="card-img-top" alt="Contact Avatar" />
                            <div className="card-body">
                                <h6><b>Nombre:</b> {item.name}</h6>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/planetsdetails/planets/${item.uid}`}>
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

    )

}
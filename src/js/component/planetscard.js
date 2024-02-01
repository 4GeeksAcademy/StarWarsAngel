import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetscard = () => {
    const { store, actions } = useContext(Context);

    const getPlanetsImageUrl = (planetsId) => {
        return `https://starwars-visualguide.com/assets/img/planets/${planetsId}.jpg`;
      };

    return (

        <div className="container">
    <h2 className="text-danger mb-3">Planets</h2>
    <div className="row">
        {store.planets && store.planets.length > 0 && store.planets.map((item, id) => (
            <div className="col md-4" key={id}>
                <div className="card mb-5 d-inline-block">
                    <img src={getPlanetsImageUrl(id + 1)} style={{ width:"210px", height:"215px" }} className="card-img-top" alt="Contact Avatar" />
                    <div className="card-body">
                        <h6><b>Nombre:</b> {item.name}</h6>
                        <h6><b>Genero:</b> {item.gender}</h6>
                        <div className="d-flex justify-content-between">
                            <Link to="/characters">
                                <button className="btn bg-success"><h6 className="text-white">Learn More</h6></button>
                            </Link>
                            <button className="btn btn-primary" onClick={() => actions.addFavoritos("Nuevo Favorito")}>
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
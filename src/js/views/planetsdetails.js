import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Planets = () => {

	const { category, id } = useParams()
	console.log(id)
	const { store, actions } = useContext(Context)
  
	useEffect(() => {
	  actions.getPlanetsdetails(id)
	}, [])
  
	let details = store.planetDetails;
	console.log(details.result?.properties.name)

  
	switch (category) {

	  case "planets":
		details = store.planetDetails[id]
		break;
  
	  default:
		details = null
	}   

	
	return(

	<div className="col-4 mx-auto">
    {store.planetDetails.result?.uid === id ? (
        <div className="card">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{store.planetDetails.result.properties.name}</h5>
            <div className="card-text">
              <ul>
              <li>Climate: {store.planetDetails.result.properties.climate}</li>
              <li>Orbital period: {store.planetDetails.result.properties.orbital_period}</li>
              <li>Surface water: {store.planetDetails.result.properties.surface_water}</li>
              <li>Rotation_period: {store.planetDetails.result.properties.rotation_period}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h3>Cargando...</h3>
      )}
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button" style={{ marginLeft: "30px" }}>
          Back home
        </span>
      </Link>
	</div>
	)
}
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const Vehicles = () => {

    const { category, id } = useParams()
	console.log(id)
	const { store, actions } = useContext(Context)
  
	useEffect(() => {
	  actions.getVehiclesdetails(id)
	}, [])
  
	let details = store.vehicleDetails;
	console.log(details.result?.properties.name)

  
	switch (category) {
  
	  case "vehicles":
		details = store.vehicleDetails[id]
		break;
  
	  default:
		details = null
	}   

	
	return(

	<div className="col-4 mx-auto">
    {store.vehicleDetails.result?.uid === id ? (
        <div className="card">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{store.vehicleDetails.result.properties.name}</h5>
            <div className="card-text">
              <ul>
              <li>Consumables: {store.vehicleDetails.result.properties.consumables}</li>
              <li>Cost in credits: {store.vehicleDetails.result.properties.cost_in_credits}</li>
              <li>Crew: {store.vehicleDetails.result.properties.crew}</li>
              <li>Manufacturer: {store.vehicleDetails.result.properties.manufacturer}</li>
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
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";


export const Details = () => {

  const { category, id } = useParams()
  console.log(id)
  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getCharactersdetails(id)
  }, [])

  let details = store.characterDetails;
  console.log(details.result?.properties.name)

  switch (category) {
    case "characters":
      details = store.characterDetails[id]
      /*console.log(details)*/
      break;

    case "planets":
      details = store.planetDetails[id]
      break;

    case "vehicles":
      details = store.vehicleDetails[id]
      break;

    default:
      details = null
  }


  return (

    <div className="col-4 mx-auto">
      {store.characterDetails.result?.uid === id ? (
        <div className="card">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{store.characterDetails.result.properties.name}</h5>
            <div className="card-text">
              <ul>
                <li>Gender: {store.characterDetails.result.properties.gender}</li>
                <li>Eye Color: {store.characterDetails.result.properties.eye_color}</li>
                <li>Hair Color: {store.characterDetails.result.properties.hair_color}</li>
                <li>Descripton: {store.characterDetails.result.description}</li>
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

};

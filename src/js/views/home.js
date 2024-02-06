import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Charactercard } from "../component/charactercard";
import { Planetscard } from "../component/planetscard";
import { Vehiclescard } from "../component/vehiclescard";
import { Context } from "../store/appContext";




export const Home = () => {
	const { store } = useContext(Context);
	const characterDetails = store.characterDetails
	console.log(characterDetails)

return (

    <div className="text-center mt-5">
		<Charactercard />
		<Planetscard />
		<Vehiclescard />
	</div>
	
)
};

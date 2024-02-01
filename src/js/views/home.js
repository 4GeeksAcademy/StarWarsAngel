import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Charactercard } from "../component/charactercard";
import { Planetscard } from "../component/planetscard";
import { Vehiclescard } from "../component/vehicles";

export const Home = () => (

    <div className="text-center mt-5">
		<Charactercard />
		<Planetscard />
		<Vehiclescard />
	</div>
	
	
);

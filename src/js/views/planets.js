import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";



export const Planets = () => {

    const { store, actions } = useContext(Context);

    <div className="">

			<div className="">

				<div className="left">

					

				</div>

				<div className="right">	 
                    <p className="fs-4" style={{ width: "900px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi hic distinctio laudantium. Illo quos nostrum numquam deserunt animi quia eius laboriosam commodi vitae aliquid dignissimos unde error, quo assumenda iusto praesentium vero ratione esse blanditiis, nam temporibus incidunt recusandae vel! Obcaecati, quos voluptatem. Velit magni nostrum perspiciatis odit officiis ipsam similique, illo ab labore quo quibusdam quasi suscipit esse corporis quaerat, harum enim vel architecto tempora laborum, sapiente excepturi explicabo. Eaque accusantium ea odit mollitia voluptatum maxime aperiam eius molestias sint! Aliquid reprehenderit, consequatur, alias harum voluptatibus dolorem minima id iusto in explicabo fugiat enim, earum minus dolorum! Quisquam.</p>
				</div>

			</div>

			<hr className="my-4" />

			<div className="text-center">

				<p className="display-4">Rotation Period:</p>
				<p className="display-4">Orbital Period:</p>
				<p className="display-4">Diameter:</p>
				<p className="display-4">Climate:</p>
				<p className="display-4">Gravity:</p>

			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button" style={{ marginLeft: "30px" }}>
					Back home
				</span>
			</Link>
		</div>
    
}
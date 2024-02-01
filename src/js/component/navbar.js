import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

    const { favoritos, setFavoritos } = useContext(Context);

    const addFavoritos = (fav) => {
        setFavoritos([...favoritos, fav])
    }

    const borrar = (index) => {
        setFavoritos(favoritos.filter((_, i) => i !== index));
    }

    useEffect(() => {
        addFavoritos
        borrar
    }, [favoritos])

    return (
        <div className="container d-flex justify-content-between mt-3 bg-dark">
            <div className="">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
                    className="card-img-top"
                    alt="Contact Avatar"
                    style={{ width: "110px" , height: "80px" }}
                />
            </div>
            <div className="mt-3">
                <button className="btn bg-success">
                    <h6 className="text-white">Favoritos</h6>
                </button>
            </div>
        </div>
    )
};

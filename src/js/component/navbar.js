import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);


    const eliminar = (nombre) => {
        actions.eliminarFavorito(nombre);
    };
    


    return (
        <nav className="navbar navbar-light bg-dark mb-3 p-0">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
                    className="img-fluid rounded-start p-3 ms-5"
                    style={{ width: "130px", height: "85px" }}
                />
            </Link>
            <div className="me-5">
                <button
                    className="btn btn-dark border border-white position-relative"
                    type="button"
                    data-bs-toggle="dropdown"
                >
                    Favoritos
                    <span className="position-absolute translate-middle badge rounded-pill bg-white text-dark">
                        {store.favoritos.length}
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                    {store.favoritos.length === 0 ? (
                        <li className="m-2 text-secondary">Empty</li>
                    ) : (
                        store.favoritos.map((item, id) => (
                            <li key={id} className="d-flex p-1">
                                <span className="dropdown-item">
                                    {item}
                                </span>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminar(item)
                                    }
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};

import React from "react";
import ListItem from "./ListItem/ListItem";
import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";

const NavBar = () => {
  const logo =
    "https://www.dyma.cl/wp-content/uploads/2021/01/Logo-DYMA-BN_Logo-Color-mini.png";

  const { carrito, total, cantidadTotal } = useContext(CarritoContext);

  return (
    <header>
      <div className="div-header">
        <Link to="/">
          <img
            className="logoNavBar"
            src={logo}
            alt="Logo DYMA - Radios y Comunicaciones"
          />
        </Link>
      </div>
      <div className="div-header">
        <h1>Radios y Comunicaciones</h1>
      </div>
      <div className="div-header">
        <nav>
          <ul>
            <NavLink to="/categoria/1">
              <ListItem ItemName="Equipo económicos" />
            </NavLink>
            <NavLink to="/categoria/2">
              <ListItem ItemName="Equipo semiprofesionales" />
            </NavLink>
            <NavLink to="/categoria/3">
              <ListItem ItemName="Equipos profesionales" />
            </NavLink>
          </ul>
          <Link to="/cart">
            <CartWidget NumberCart={cantidadTotal} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

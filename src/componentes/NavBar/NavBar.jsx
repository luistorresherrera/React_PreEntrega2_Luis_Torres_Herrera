import React from "react";
import ListItem from "./ListItem/ListItem";
import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const logo =
    "https://www.dyma.cl/wp-content/uploads/2021/01/Logo-DYMA-BN_Logo-Color-mini.png";

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
            <NavLink to="/categoria">
              <ListItem ItemName="Equipo económicos" />
            </NavLink>
            <NavLink to="/categoria">
              <ListItem ItemName="Equipo semiprofesionales" />
            </NavLink>
            <NavLink to="/categoria">
              <ListItem ItemName="Equipos profesionales" />
            </NavLink>
          </ul>
          <CartWidget NumberCart={3} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

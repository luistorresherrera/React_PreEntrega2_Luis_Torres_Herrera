import React from "react";
import ListItem from "./ListItem/ListItem";
import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  const logo =
    "https://www.dyma.cl/wp-content/uploads/2021/01/Logo-DYMA-BN_Logo-Color-mini.png";

  return (
    <header>
      <img
        className="logoNavBar"
        src={logo}
        alt="Logo DYMA - Radios y Comunicaciones"
      />
      <h1>Radios y Comunicaciones</h1>
      <nav>
        <ul>
          <ListItem ItemName="Venta de radios" />
          <ListItem ItemName="Alquiler de radios" />
          <ListItem ItemName="Servicio técnico" />
        </ul>
        <CartWidget NumberCart={3} />
      </nav>
    </header>
  );
};

export default NavBar;

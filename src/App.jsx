import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting="Bienvenid@ a DYMA Comunicaciones"
        url="./db/productos.json"
      />
    </>
  );
}

export default App;

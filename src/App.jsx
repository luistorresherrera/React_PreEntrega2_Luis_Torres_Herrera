import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/categoria/:idCategoria"
            element={
              <ItemListContainer
                greeting="Encuentra el mejor equipo para tu empresa"
                // urlProductos="./src/db/productos.json"
              />
            }
          />
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Encuentra el mejor equipo para tu empresa"
                // urlProductos="./src/db/productos.json"
              />
            }
          />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

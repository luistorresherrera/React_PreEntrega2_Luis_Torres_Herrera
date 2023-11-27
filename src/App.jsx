import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/carritoContext";
import Cart from "./componentes/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
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
                <ItemListContainer greeting="Encuentra el mejor equipo para tu empresa" />
              }
            />
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

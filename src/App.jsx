import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route
//             path="/producto/:idCategoria"
//             element={
//               <ItemListContainer
//                 greeting="Encuentra el mejor equipo para tu empresa"
//                 urlProductos="./src/db/productos.json"
//               />
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/:idCategoria"
            element={
              <ItemListContainer
                greeting="Encuentra el mejor equipo para tu empresa"
                urlProductos="./src/db/productos.json"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

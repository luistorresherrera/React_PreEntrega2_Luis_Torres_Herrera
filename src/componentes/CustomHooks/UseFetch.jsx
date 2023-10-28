import { useEffect, useState } from "react";

const UseFetch = () => {
  const [datos, setdatos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("./src/componentes/CustomHooks/productos.json")
        .then((response) => response.json())
        .then((data) => setdatos(data))
        .catch((error) => console.log(error));
    }, 2000),
      [];
  });
  console.log(datos);
  return datos;
};

export default UseFetch;

// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error fetching data:", error));

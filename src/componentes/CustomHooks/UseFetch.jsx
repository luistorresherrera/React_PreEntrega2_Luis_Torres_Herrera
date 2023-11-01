import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [datos, setdatos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setdatos(data))
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  console.log(datos);
  return datos;
};

export default UseFetch;

import { useFetch } from "./UseFetch";

export const getCategoria = async (idCat) => {
  const fetchCategoria = await useFetch(
    window.location.origin + "/src/db/categorias.json"
  );

  const categoria =
    fetchCategoria && fetchCategoria.find((item) => item.idCategoria == idCat);
  return idCat
    ? categoria?.nombreCategoria || "No se encontró categoría"
    : "Todos los productos";
};

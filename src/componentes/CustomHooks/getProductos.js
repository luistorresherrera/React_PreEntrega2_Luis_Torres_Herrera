import UseFetch from "./UseFetch";

export const getProductosPorCategoria = (url, idCat) => {
  const fetchProductos = UseFetch(url);

  const productosCategoria = idCat
    ? fetchProductos.filter((item) => item.categoriaProducto === 2)
    : fetchProductos;

  return productosCategoria;
};

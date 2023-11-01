import UseFetch from "./UseFetch";

export const getProductosPorCategoria = (idCat) => {
  const fetchProductos = UseFetch("./src/db/productos.json");

  //   const productosCategoria = idCat
  //     ? fetchProductos.filter((item) => item.categoriaProducto == idCat)
  //     : fetchProductos;
  let productosCategoria = [];
  if (idCat) {
    productosCategoria = fetchProductos.filter(
      (item) => item.categoriaProducto == idCat
    );
    // const tituloCategoria = UseFetch("./src/db/categoria.json");
    // console.log(tituloCategoria);
  } else {
    productosCategoria = fetchProductos;
  }

  return productosCategoria;
};

export const getDetalleProducto = (url, idItem) => {
  const fetchProductos = UseFetch(url);
  const productoIndividual = fetchProductos.find(
    (item) => item.idPrducto == idItem
  );
  return productoIndividual;
};

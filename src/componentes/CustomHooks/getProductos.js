import { useFetch } from "./UseFetch";

export const getProductosPorCategoria = async (idCat) => {
  const fetchProductos = await useFetch(
    window.location.origin + "/src/db/productos.json"
  );
  console.log(idCat);
  console.log("fetchProducts", fetchProductos);
  let productosCategoria = [];
  if (idCat) {
    productosCategoria = fetchProductos.filter(
      (item) => item.categoriaProducto == idCat
    );
  } else {
    productosCategoria = fetchProductos;
  }

  return productosCategoria;
};

export const getDetalleProducto = async (idItem) => {
  const fetchProductos = await useFetch(
    window.location.origin + "/src/db/productos.json"
  );
  const productoIndividual = fetchProductos.find(
    (item) => item.idProducto == idItem
  );

  return productoIndividual;
};

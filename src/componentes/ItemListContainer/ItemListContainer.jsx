import ProductList from "./ProductList/ProductList";
import UseFetch from "../CustomHooks/UseFetch";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProductosPorCategoria } from "../CustomHooks/getProductos";
import { useEffect } from "react";

const ItemListContainer = ({ greeting, urlProductos }) => {
  const { idCategoria } = useParams();

  // useEffect(() => {
  const datosProductos = getProductosPorCategoria(urlProductos, idCategoria);
  // }, [idCategoria]);

  return (
    <>
      <h2 className="titlepage" style={{ textAlign: "center", color: "black" }}>
        {greeting}
      </h2>
      <ProductList producto={datosProductos} />
    </>
  );
};

export default ItemListContainer;

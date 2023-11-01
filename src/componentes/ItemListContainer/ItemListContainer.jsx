import ProductList from "./ProductList/ProductList";
import UseFetch from "../CustomHooks/UseFetch";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProductosPorCategoria } from "../CustomHooks/getProductos";
import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting, urlProductos }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  // useEffect(() => {
  const productosX = getProductosPorCategoria(idCategoria);
  //   setProductos(productosX);
  // }, [idCategoria]);

  return (
    <>
      <h2 className="titlepage" style={{ textAlign: "center", color: "black" }}>
        {greeting}
      </h2>
      <ProductList producto={productosX} />
    </>
  );
};

export default ItemListContainer;

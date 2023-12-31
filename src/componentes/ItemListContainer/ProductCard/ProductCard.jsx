import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  imagenProductoURL,
  nombreProducto,
  precioProducto,
  marcaProducto,
}) => {
  return (
    <div className="cardProducto">
      <img src={imagenProductoURL} alt={nombreProducto} />
      <h3>{nombreProducto}</h3>
      <p>{marcaProducto}</p>
      <p>Precio: CLP {precioProducto} +IVA</p>
      <div className="linkButton">
        <Link to={`/item/${id}`}>Ver detalles</Link>
      </div>
    </div>
  );
};

export default ProductCard;

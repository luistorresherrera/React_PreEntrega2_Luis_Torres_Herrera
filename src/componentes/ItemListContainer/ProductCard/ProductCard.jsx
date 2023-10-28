import React from "react";
import "./ProductCard.css";

const ProductCard = ({
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
      <button>Ver detalles</button>
    </div>
  );
};

export default ProductCard;

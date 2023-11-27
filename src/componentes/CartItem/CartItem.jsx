import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div>
      <h4>{item.nombreProducto}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio Unitario: CLP {item.precioProducto}</p>
      <button onClick={() => eliminarProducto(item.idProducto)}>
        Eliminar producto
      </button>
    </div>
  );
};

export default CartItem;

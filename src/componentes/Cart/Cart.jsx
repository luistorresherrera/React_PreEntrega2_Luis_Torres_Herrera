import { useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal == 0) {
    return (
      <>
        <h2>No hay productos en el carrito actualmente.</h2>
        <Link to="/">Ver productos</Link>
      </>
    );
  }
  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.idProducto} {...producto} />
      ))}
      <hr></hr>
      <h3>Total: CLP {total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;

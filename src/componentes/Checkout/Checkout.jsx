import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/carritoContext";
import { db } from "../../servicios/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { carrito, vaciarCarrito, total, totalCantidad } =
    useContext(CarritoContext);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa los campos del formulario");
      return;
    }
    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden.");
      return;
    }

    const orden = {
      items: carrito.map((prod) => ({
        id: prod.item.idProducto,
        nombre: prod.item.nombreProducto,
        cantidad: prod.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "orders"), orden)
      .then((docRef) => {
        setOrderId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => console.log("Error al setear la orden"));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        {carrito.map((prod) => (
          <div key={prod.item.idProducto}>
            <p>
              {prod.item.nombreProducto} x {prod.cantidad}
            </p>
            <p>CLP {prod.item.precioProducto}</p>
            <hr />
          </div>
        ))}

        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Confirmación Email</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" onClick={manejadorFormulario}>
          Confirmar compra
        </button>
        {orderId && (
          <p> Gracias por tu compra! Tu número de orden es {orderId}</p>
        )}
      </form>
    </div>
  );
};

export default Checkout;

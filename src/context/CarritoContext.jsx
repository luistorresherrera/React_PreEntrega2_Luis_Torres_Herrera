import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  console.log("El carrito tiene");
  console.log(carrito);

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find(
      (prod) => prod.item.idProducto == item.idProducto
    );

    console.log("producto existente " + productoExistente);
    console.log("item idProducto " + item.idProducto);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precioProducto * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.idProducto == item.idProducto) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precioProducto * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find(
      (prod) => prod.item.idProducto === id
    );
    const carritoActualizado = carrito.filter(
      (prod) => prod.item.idProducto !== id
    );

    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev -
        productoEliminado.item.precioProducto * productoEliminado.cantidad
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

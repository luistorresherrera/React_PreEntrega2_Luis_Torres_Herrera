import React, { useEffect, useState } from "react";
import { getDetalleProducto } from "../CustomHooks/getProductos";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { CarritoContext } from "../../context/carritoContext";
import { useContext } from "react";
import { db } from "../../servicios/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();

  const { agregarAlCarrito } = useContext(CarritoContext);

  const [producto, setProducto] = useState(null);
  const [cantidadItemDetail, setCantidadItemDetail] = useState(1);

  const incrementarItemDetail = () => {
    setCantidadItemDetail(cantidadItemDetail + 1);
  };
  const reducirItemDetail = () => {
    cantidadItemDetail > 1 && setCantidadItemDetail(cantidadItemDetail - 1);
  };

  useEffect(() => {
    // getDetalleProducto(idProducto).then((respuesta) => setProducto(respuesta));

    const nuevoDoc = doc(db, "products", idProducto);
    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevoProducto = { idProducto: res.id, ...data };
        setProducto(nuevoProducto);
      })
      .catch((error) => console.log(error));
  }, [idProducto]);

  const manjadorAgregarAlCarrito = () => {
    console.log("producto visto");
    console.log(producto);
    agregarAlCarrito(producto, cantidadItemDetail);
  };

  return (
    <div>
      {producto && (
        <>
          <div className="PageProducto">
            <div className="ImagenProducto">
              <img
                src={producto.imagenProductoURL}
                alt={producto.nombreProducto}
              />
            </div>
            <div className="DetalleProducto">
              <h2>{producto.nombreProducto}</h2>
              <p>
                <strong>Marca:</strong> {producto.marcaProducto}
              </p>
              <p>
                <strong>Precio:</strong> CLP {producto.precioProducto} +IVA
              </p>
              <p>
                <strong>Detalle:</strong>
              </p>
              <p>{producto.descripcionProducto}</p>
              <br></br>
              <h3>Cantidad de producto</h3>
              <br></br>

              <button className="btnCantidad" onClick={reducirItemDetail}>
                -
              </button>
              <span>{cantidadItemDetail}</span>
              <button className="btnCantidad" onClick={incrementarItemDetail}>
                +
              </button>

              <button className="btnAgregar" onClick={manjadorAgregarAlCarrito}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;

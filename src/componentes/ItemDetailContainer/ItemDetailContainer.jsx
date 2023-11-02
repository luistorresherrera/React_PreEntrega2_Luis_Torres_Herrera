import React, { useEffect, useState } from "react";
import { getDetalleProducto } from "../CustomHooks/getProductos";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { idProducto } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getDetalleProducto(idProducto).then((respuesta) => setProducto(respuesta));
  }, [idProducto]);

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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;

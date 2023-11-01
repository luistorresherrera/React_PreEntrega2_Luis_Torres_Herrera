import React, { useEffect, useState } from "react";
import { getDetalleProducto } from "../CustomHooks/getProductos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ urlProductos }) => {
  const { idProducto } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getDetalleProducto(urlProductos, idProducto).then((respuesta) =>
      setProducto(respuesta)
    );
  }, [idProducto]);
  console.log(producto);
  return (
    <div>
      {/* <img
        src={detalleProducto.imagenProductoURL}
        alt={detalleProducto.nombreProducto}
      />
      <h2 style={{ textAlign: "center", color: "black" }}>
        {detalleProducto.nombreProducto}
      </h2>
      <p>Marca: {detalleProducto.marcaProducto}</p>
      <p>Precio: CLP {detalleProducto.precioProducto} +IVA</p> */}
      {idProducto}
      {/* {detalleProducto.nombreProducto} */}
    </div>
  );
};

export default ItemDetailContainer;

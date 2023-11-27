import ProductList from "./ProductList/ProductList";

import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProductosPorCategoria } from "../CustomHooks/getProductos";
import { useEffect, useState } from "react";
import { getCategoria } from "../CustomHooks/getCategoria";
import { db } from "../../servicios/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [main, setMain] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(
          collection(db, "products"),
          where("categoriaProducto", "==", idCategoria)
        )
      : collection(db, "products");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));

    getCategoria(idCategoria).then((y) => {
      setCategoria(y);
    });
    console.log("productos");
    console.log(productos);
  }, [idCategoria]);

  // useEffect(() => {
  //   // getProductosPorCategoria(idCategoria).then((x) => {
  //   //   setProductos(x);
  //   //   setMain(structuredClone(x));
  //   // });
  // }, [idCategoria]);

  // const onSearch = (e) => {
  //   const ipt = e.target.value;
  //   let filter = [];

  //   filter = main.filter(
  //     (x) =>
  //       x.nombreProducto.toLowerCase().includes(ipt.toLowerCase()) ||
  //       x.marcaProducto.toLowerCase().includes(ipt.toLowerCase())
  //   );

  //   setProductos(filter);
  // };

  return (
    <div>
      <h2 className="titlepage" style={{ textAlign: "center", color: "black" }}>
        {categoria}
      </h2>
      {/* <div className="buscador">
        <input
          onChange={onSearch}
          placeholder="Busca el equipo que necesites"
        />
      </div> */}
      <ProductList producto={productos} />
    </div>
  );
};

export default ItemListContainer;

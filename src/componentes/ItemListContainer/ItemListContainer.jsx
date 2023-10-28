// import { getProductos } from "../asyncmock";
import ProductList from "./ProductList/ProductList";
import UseFetch from "../CustomHooks/UseFetch";

const ItemListContainer = ({ greeting }) => {
  // const [datosProductos, setdatosProductos] = useState([]);
  // useEffect(() => {
  //   getProductos()
  //     .then((respuesta) => setdatosProductos(respuesta))
  //     .catch((error) => console.log(error)),
  //     [];
  // });
  const datosProductos = UseFetch();
  return (
    <>
      <h2 style={{ textAlign: "center", color: "black" }}>{greeting}</h2>
      <ProductList producto={datosProductos} />
    </>
  );
};

export default ItemListContainer;

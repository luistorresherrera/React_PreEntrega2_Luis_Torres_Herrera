import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ producto }) => {
  // console.log(producto);
  return (
    <div className="productList">
      {producto &&
        producto.map((item) => <ProductCard key={item.idProducto} {...item} />)}
    </div>
  );
};

export default ProductList;

import { Link } from "react-router-dom";
import { products } from "../data/Products";
import "./Product.css";

const Product = () => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <Link className="product-link" to={`/products/${product.id}`}>
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>₹ {product.price.toLocaleString()}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;

import { useParams, Link } from "react-router-dom";
import { products } from "../data/Products";
import "./ProductDetail.css";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const {addToCart} = useCart()
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
    <div className="p-not-found">
      <h2>Product Not Found</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  )
  }

  return (
    <div className="product-detail">
      <Link to="/products">⬅ Back to Products</Link>
      <div className="product-img">
        <img 
          src={product.image} 
          alt={product.name} 
        />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
           <h2>₹ {product.price.toLocaleString("en-IN")}</h2>
          <button onClick={()=>{
            addToCart(product)
            console.log(product)
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="addtocart">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id}>
            <figure>
                <img src={item.image} alt={item.name} />
            </figure>
          <h3>{item.name}</h3>
          <p>Qty: {item.qty}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};


export default Cart;
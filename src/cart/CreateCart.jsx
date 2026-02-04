import CartItem from "./CartItem";
import "./cart.css";
/**
 *  Try to find if the plant is already in the cart.
 *  If it is, then create a new copy of the cart by mapping over it and
 *  increasing the quantity of just that cart item by 1.
 *  If it isn't, then create a new cart item with a quantity of 1.
 *  A cart item is just a plant with an additional quantity property.
 */
export default function CreateCart({ cart, addToCart, removeFromCart }) {
  if (cart.length === 0)
    return (
      <section className="cart">
        <h2>Cart</h2>
        <p>Your cart is empty, please add an item.</p>
      </section>
    );
  return (
    <section className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          ></CartItem>
        ))}
      </ul>
    </section>
  );
}

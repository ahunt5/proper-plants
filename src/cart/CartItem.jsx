export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li key={item.id} className="cart-item">
      <span>
        {item.image} {item.name}
      </span>
      <p className="cart-p">
        <button onClick={() => removeFromCart(item)}>-</button>
        {item.quantity}
        <button onClick={() => addToCart(item)}>+</button>
      </p>
    </li>
  );
}

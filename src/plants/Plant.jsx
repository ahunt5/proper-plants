export default function Plant({ plant, addToCart }) {
  return (
    <li className="plant-image">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button
        className="plant-button"
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to Cart
      </button>
    </li>
  );
}

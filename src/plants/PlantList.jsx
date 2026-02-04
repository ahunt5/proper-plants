// get list of plants
// destructure list of plants
// get the names, ids, and image of each plant
// put an image of the plant, then an h3 of the plant name
// add a btn below the plant name
// copy an array or object with the spread operator (...)
import PLANTS from "../data";
import Plant from "./plant";
export default function PlantList({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul className="plant-list">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart}></Plant>
        ))}
      </ul>
    </section>
  );
}

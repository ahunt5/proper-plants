import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";
import "./plants/plants.css";
import CreateCart from "./cart/CreateCart";
// pushing to array doesnt change the memory address, so react doesnt rerender
// react rerenders if memory address changes
// .push .pop doesnt work
// treat React state is immutable, don't directly change it
// setCart on a copy of the array
// copy has a new memory address
// const cartCopy = [...cart, item];
const item = { image: "image", id: "1", name: "test", quantity: 1 };

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  /**
   * First, use `map` to decrease the quantity of the item to remove by 1.
   * Then, keep only the items that have a quantity greater than 0.
   */
  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantList plants={PLANTS} addToCart={addToCart}></PlantList>
        <CreateCart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        ></CreateCart>
      </main>
    </>
  );
}

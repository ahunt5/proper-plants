import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./plants/PlantList";
import "./plants/plants.css";
// pushing to array doesnt change the memory address, so react doesnt rerender
// react rerenders if memory address changes
// .push .pop doesnt work
// treat React state is immutable, don't directly change it
// setCart on a copy of the array
// copy has a new memory address
// const cartCopy = [...cart, item];
const item = { image: "image", id: "1", name: "test", quantity: 1 };
export default function App() {
  const [cart] = useState(PLANTS);
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantList plants={PLANTS}></PlantList>
      </main>
    </>
  );
}

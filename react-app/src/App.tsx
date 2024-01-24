import { useState } from "react";

export default function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "asif",
    },
  });
  const [pizza, setPizza] = useState({
    name: "spicy pepperoni",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  function handleClick() {
    setGame({
      ...game,
      player: { ...game.player, name: "rafiul" },
    });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  }
  return (
    <div>
      <button onClick={handleClick}>{}</button>
    </div>
  );
}

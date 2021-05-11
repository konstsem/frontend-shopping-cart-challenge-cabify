import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import OrderSummery from './components/OrderSummery';

function Main(props) {
  const { co } = props;
  const [items, setItems] = useState(co.items);

  const scan = (code) => (op) => (e) => {
    // e.preventDefault();
    switch (op) {
      case 'dec':
        co.scan(code, -1);
        break;
      case 'set':
        co.scan(code, Number(e.target.value));
        break;
      case 'inc':
        co.scan(code, 1);
        break;
      default:
        // unknown operation
        break;
    }
    // set new cart items list for react
    setItems([...co.items]);
  };

  const cost = (code) => co.cost(code);

  return (
    <main className="App">
      <ShoppingCart items={items} scan={scan} cost={cost} />
      <OrderSummery total={({ totalItems: 1, totalCost: 10 })} />
    </main>
  );
}

export default Main;

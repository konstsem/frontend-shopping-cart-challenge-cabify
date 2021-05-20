import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import OrderSummery from './components/OrderSummery';

function Main(props) {
  const { co } = props;
  const [items, setItems] = useState(co.items);

  const initStateSum = co.preCalc();
  const initTotalCost = co.total();
  const [summary, setSummary] = useState({
    ...initStateSum,
    totalCost: initTotalCost,
  });

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
    const newSums = co.preCalc();
    const newTotalCost = co.total();
    setSummary({
      ...newSums,
      totalCost: newTotalCost,
    });
  };

  const cost = (code) => co.cost(code);

  return (
    <main className="App">
      <ShoppingCart items={items} scan={scan} cost={cost} />
      <OrderSummery summary={summary} />
    </main>
  );
}

export default Main;

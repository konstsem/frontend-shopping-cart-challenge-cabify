import React, { useState } from 'react';
import { render } from 'react-dom';
import ShoppingCart from './components/ShoppingCart';
import OrderSummery from './components/OrderSummery';
// import './App.css';
import items from './cart';

const countMaxLimit = 100;
const countMinLimit = 0;

function App() {
  const [cart, setCart] = useState({
    items: items.map((item) => ({ ...item, count: 0, total: 0 })),
    total: {
      countItems: 0,
      summary: 0,
      totalCost: 0,
    },
    discounts: {
      list: [
      ],
      total: 0,
    },
  });

  /*
  const setTotals = () => {
    setCart({
      ...cart,
      total: {
        countItems: cart.items.reduce((acc, item) => acc + item.count, 0),
        summary: cart.items.reduce((acc, item) => acc + item.total, 0),
        totalCost: cart.items.reduce((acc, item) => acc + item.total, 0) - cart.discounts.total,
      },
    });
  };
  */

  const switchPromo = () => {
    // apply promo code
  };

  const countOps = {
    setCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
          if (item.code === code) {
            const newValue = Number(e.target.value);
            return ({ ...item, count: newValue, total: newValue * item.price });
          }
          return item;
        }),
      });
    },

    incCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
          if (item.code === code) {
            if (item.count < countMaxLimit) {
              const newValue = item.count + 1;
              return ({ ...item, count: newValue, total: newValue * item.price });
            }
          }
          return item;
        }),
      });
    },

    decCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
          if (item.code === code) {
            if (item.count > countMinLimit) {
              const newValue = item.count - 1;
              return ({ ...item, count: newValue, total: newValue * item.price });
            }
          }
          return item;
        }),
      });
    },
  };

  return (
    <main className="App">
      <ShoppingCart items={cart.items} countOps={countOps} />
      <OrderSummery total={cart.total} discounts={cart.discounts} switchPromo={switchPromo} />
    </main>
  );
}

export default () => render(<App />, document.getElementById('root'));

import React, { useState } from 'react';
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

  const switchPromo = () => {
    console.log('click')
  };

  const countOps = {
    setCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
          if (item.code === code) {
            item.count = Number(e.target.value);
            item.total = item.count * item.price;
          }
          return item;
        }),
        total: {
          countItems: cart.items.reduce((acc, item) => acc + item.count, 0),
        summary: cart.items.reduce((acc, item) => acc + item.total, 0),
          totalCost: cart.items.reduce((acc, item) => acc + item.total, 0) - cart.discounts.total,
        },
      });
    },

    incCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
        if (item.code === code) {
          if (item.count < countMaxLimit) {
            item.count += 1;
            item.total = item.count * item.price;
          }
        }
          return item;
        }),
        total: {
          countItems: cart.items.reduce((acc, item) => acc + item.count, 0),
        summary: cart.items.reduce((acc, item) => acc + item.total, 0),
          totalCost: cart.items.reduce((acc, item) => acc + item.total, 0) - cart.discounts.total,
        },
      });
    },

    decCount: (code) => (e) => {
      e.preventDefault();
      setCart({
        ...cart,
        items: cart.items.map((item) => {
        if (item.code === code) {
          if (item.count > countMinLimit) {
            item.count -= 1;
            item.total = item.count * item.price;
          }
        }
          return item;
        }),
        total: {
          countItems: cart.items.reduce((acc, item) => acc + item.count, 0),
        summary: cart.items.reduce((acc, item) => acc + item.total, 0),
          totalCost: cart.items.reduce((acc, item) => acc + item.total, 0) - cart.discounts.total,
        },
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

export default App;

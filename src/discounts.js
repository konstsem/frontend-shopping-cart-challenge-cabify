const discounts = [
  {
    name: '2-for-1 Mug',
    check: (items) => {
      // eslint-disable-next-line
      const currentItem = items.find((item) => item.code === 'MUG');
      if (currentItem && currentItem.count > 1) return ({ name: '2x1 Mug offer', discountAmount: Math.trunc(currentItem.count / 2) * currentItem.price });
      return null;
    }, // check need cart argument
  },
  {
    name: 'bulk discount Shirt',
    check: (items) => {
      // eslint-disable-next-line
      const currentItem = items.find((item) => item.code === 'TSHIRT');
      if (currentItem && currentItem.count >= 3) return ({ name: 'x3 Shirt offer', discountAmount: (currentItem.price / 100) * 5 * currentItem.count });
      return null;
    },
  },
];

export default discounts;

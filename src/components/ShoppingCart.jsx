import React from 'react';
import { uniqueId } from 'lodash';
import CartString from './CartString';

function ShoppingCart(props) {
  const { items, scan, cost } = props;
  return (
    <section className="products">
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list">
        {items.map((item) => (
          <CartString
            content={item}
            scan={scan(item.code)}
            cost={cost(item.code)}
            key={uniqueId()}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingCart;

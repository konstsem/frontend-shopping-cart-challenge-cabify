import React from 'react';
import { uniqueId } from 'lodash';
import CartString from './CartString';

function ShoppingCart (props) {
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
    {props.items.map((item) => {
      return (<CartString content={item} countOps={props.countOps} key={uniqueId()} />);
    })}
      </ul>
    </section>
  );
}

export default ShoppingCart;

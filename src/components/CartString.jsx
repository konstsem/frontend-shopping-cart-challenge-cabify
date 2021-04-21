import React from 'react';

function CartString (props) {
  const { productCode, name, count, imageName, price, code, total } = props.content;
  const { setCount, incCount, decCount } = props.countOps;
  return (
    <li className="product row">
      <div className="col-product">
        <figure className="product-image">
          <img src={`assets/img/${imageName}.png`} alt={imageName} />
          <div className="product-description">
            <h1>{name}</h1>
            <p className="product-code">{productCode}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count" onClick={decCount(code)}>-</button
    ><input type="text" className="product-quantity" value={count} onChange={setCount(code)} /><button
    className="count" onClick={incCount(code)}
        >
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">{price}</span
        ><span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">{total}</span
        ><span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default CartString;

import React from 'react';

function CartString(props) {
  const {
    content: {
      productCode,
      name,
      count,
      imageName,
      price,
    },
    scan,
    cost,
  } = props;
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
        <button type="button" className="count" onClick={scan('dec')}>
          -
        </button>
        <input type="text" className="product-quantity" value={count} onChange={scan('set')} />
        <button type="button" className="count" onClick={scan('inc')}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">
          {price}
        </span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">{cost}</span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default CartString;

import React from 'react';
import { uniqueId } from 'lodash';

function OrderSummery(props) {
  const {
    summary: {
      countItems, summaryCost, actualDiscounts, totalCost,
    },
  } = props;
  return (
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">
            {countItems || 0}
            {' '}
            Items
          </span>
          <span className="summary-items-price">
            {summaryCost || 0}
            <span className="currency">
              €
            </span>
          </span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        {actualDiscounts && (
          <ul>
            {actualDiscounts.map((disc) => (
              <li key={uniqueId()}>
                <span>{disc.name}</span>
                <span>
                  -
                  {disc.discountAmount}
                  {' '}
                  €
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">
              Total cost
            </span>
            <span className="summary-total-price">
              {totalCost || 0}
              €
            </span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
  );
}

export default OrderSummery;

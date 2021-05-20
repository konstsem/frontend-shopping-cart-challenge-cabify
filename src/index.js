import items from './cart';
import discounts from './discounts';
import Checkout from './Checkout';
import app from './App';

const co = new Checkout(items, discounts);
co.init(); // fake filling the cart
app(co);

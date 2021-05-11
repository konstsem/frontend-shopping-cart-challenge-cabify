import items from './cart';
import Checkout from './Checkout';
import app from './App';

const co = new Checkout(items);
co.init(); // fake filling the cart
app(co);

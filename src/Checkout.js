export default class Checkout {
  constructor(price, promo = {}) {
    this.price = price;
    this.promo = promo;
    this.cartItems = [];
    // init(); where we make fake scaning for items
  }

  // fake method for fill the cart
  init() {
    this.price.forEach((item) => this.scan(item.code));
  }

  get items() {
    return this.cartItems;
  }

  scan(code, argument = 1) {
    const currentCartItem = this.cartItems.find((item) => item.code === code);
    if (currentCartItem) {
      switch (argument) {
        case 1:
          currentCartItem.count += 1;
          break;
        case -1:
          currentCartItem.count -= 1;
          if (currentCartItem.count === 0) {
            this.cartItems = this.cartItems.filter((item) => item.code !== code);
          }
          break;
        default:
          currentCartItem.count = argument;
          break;
      }
      // currentCartItem.count += 1;
      return this;
    }
    const currentPriceItem = this.price.find((item) => item.code === code);
    if (currentPriceItem) {
      switch (argument) {
        case 1:
          this.cartItems.push({ ...currentPriceItem, count: 1 });
          break;
        case -1:
          break;
        default:
          this.cartItems.push({ ...currentPriceItem, count: argument });
      }
      // this.cartItems.push({ ...currentPriceItem, count: 1 });
      return this;
    }
    return new Error(`product with code ${code} has not been found`);
  }

  cost(code) {
    const currentCartItem = this.cartItems.find((item) => item.code === code);
    if (currentCartItem) {
      return currentCartItem.count * currentCartItem.price;
    }
    return null;
  }

  // method total will return total count of items and total cost
  total() {
    return ({
      totalItems: this.cartItems.reduce((acc, item) => acc + item.count, 0),
      totalCost: this.cartItems.reduce((acc, item) => acc + (item.count * item.price), 0),
    });
  }
}

export default class Checkout {
  constructor(price, discounts = []) {
    this.price = price.reduce((acc, good) => ({ ...acc, [good.code]: good }), {});
    this.discounts = discounts;
    this.cartItems = [];
    // this.actualDiscounts = [];
  }

  // fake method for fill the cart
  init() {
    this.scan('TSHIRT');
    this.scan('MUG');
    this.scan('CAP');
    // this.price.forEach((item) => this.scan(item.code));
  }

  get items() {
    return this.cartItems;
  }

  get actualDiscounts() {
    return this.discounts.reduce(
      (acc, discount) => {
        const res = discount.check(this.items);
        if (res) return [...acc, res];
        return acc;
      }, [],
    );
  }

  get totalDiscount() {
    return this.actualDiscounts.reduce((acc, { discountAmount }) => acc + discountAmount, 0);
  }

  /*
  updateDiscounts() {
    this.actualDiscounts = this.discounts.reduce(
      (acc, discount) => {
        const res = discount.check(this.items);
        if (res) return [...acc, res];
        return acc;
      }, [],
    );
  }
  */

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
      // this.updateDiscounts();
      return this;
    }
    // const currentPriceItem = this.price.find((item) => item.code === code);
    const currentPriceItem = this.price[code];
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
      // this.updateDiscounts();
      return this;
    }
    // this.updateDiscounts();
    return new Error(`product with code ${code} has not been found`);
  }

  cost(code) {
    const currentCartItem = this.cartItems.find((item) => item.code === code);
    if (currentCartItem) {
      return currentCartItem.count * currentCartItem.price;
    }
    return null;
  }

  preCalc() {
    return ({
      countItems: this.cartItems.reduce((acc, item) => acc + item.count, 0),
      summaryCost: this.cartItems.reduce((acc, item) => acc + (item.count * item.price), 0),
      actualDiscounts: this.actualDiscounts,
    });
  }

  // method total will return total cost as number
  total() {
    return this.cartItems.reduce(
      (acc, item) => acc + (item.count * item.price),
      0,
    ) - this.totalDiscount;
  }
}

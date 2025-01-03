const inventory = {
  sunglasses: 9,
  pants: 1088,
  bags: 1000,
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every((item) => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve('Thank you. Your order was successful.');
      } else {
        reject(
          `We're sorry. Your order could not be completed because some items are sold out.`
        );
      }
    }, 2000);
  });
};

module.exports = { checkInventory };

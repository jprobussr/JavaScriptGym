import products from './data.js';

const sortProducts = (data) => {
  return data.sort((a, b) => {
    return a.price - b.price;
  });
};

const list = sortProducts(products);

list.forEach((item) => console.log(item.price, item.product));


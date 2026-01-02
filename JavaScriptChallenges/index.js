import products from './data.js';

const sortProducts = (data) => {
  return data.sort((a, b) => {
    return b.price - a.price;
  });
};

const cheapList = sortProducts(products);

cheapList.forEach(item => console.log(item.product, item.price));
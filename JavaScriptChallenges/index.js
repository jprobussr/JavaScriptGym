import products from './data.js';

const getSaleItems = (data) => {
  return data
    .filter((product) => product.type === 'sweet')
    .map((item) => {
      return {
        item: item.item,
        price: item.price,
      };
    });
};

console.log(getSaleItems(products));
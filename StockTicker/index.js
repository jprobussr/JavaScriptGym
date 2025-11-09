import { getStockData } from './fakeStockAPI.js';

setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById('name');
  const stockDisplaySymbol = document.getElementById('symbol');
  const stockDisplayPrice = document.getElementById('price');
  const stockDisplayPriceIcon = document.getElementById('price-icon');
  const stockDisplayTime = document.getElementById('time');

  const { name, sym, price, time } = stockData;

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = price;
  stockDisplayTime.innerText = time
}

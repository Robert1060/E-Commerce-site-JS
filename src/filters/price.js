import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  let maxValue = store.map((product) => product.price);
  maxValue = Math.max(...maxValue);
  maxValue = Math.ceil(maxValue / 100);
  priceInput.value = maxValue;
  priceInput.max = maxValue;
  priceInput.min = 0;

  priceValue.textContent = `Value : ${maxValue}`;
  priceInput.addEventListener('input', () => {
    const value = priceInput.value;
    priceValue.textContent = `Value : ${value}`;
    const newStore = store.filter((item) => item.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const element = getElement('.products-container');
      element.innerHTML = `<h3 class="filter-error">Sorry, no matches to your search</h3>`;
    }
  });
};

export default setupPrice;

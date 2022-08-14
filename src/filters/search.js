import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const searchForm = getElement('.input-form');
  const searchInput = getElement('.search-input');

  searchForm.addEventListener('keyup', function () {
    let value = searchInput.value;
    value = value.toLowerCase();
    if (value) {
      const filteredItems = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(filteredItems, getElement('.products-container'), true);
      if (filteredItems.length < 1) {
        const errElement = getElement('.products-container');
        errElement.innerHTML = `<h3 class="filter-error">Sorry, no matches to your search</h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;

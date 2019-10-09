import bikes from '../data/bikes.js';
import cartData from '../data/cart.js';
import { renderTableRow } from './render-table-row.js';
import findById from '../common/utils.js';

const tableBody = document.querySelector('tbody');

for (let i = 0; i < cartData.length; i++){
    const lineItem = cartData[i];
    const theBike = findById(bikes, lineItem.id);
    const domChange = renderTableRow(theBike, lineItem);

    tableBody.appendChild(domChange);
}
import bikes from '../data/bikes.js';
import cartData from '../data/cart.js';
import { renderTableRow } from './render-table-row.js';
import findById, { calcOrderTotal, makePrettyCurrency } from '../common/utils.js';
import { CART_KEY } from '../products/render-bike.js';

const tableBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cartData.length; i++){
    const lineItem = cartData[i];
    const theBike = findById(bikes, lineItem.id);
    const domChange = renderTableRow(theBike, lineItem);

    tableBody.appendChild(domChange);
}

let orderTotal = calcOrderTotal(cartData, bikes);
let prettyOrderTotal = makePrettyCurrency(orderTotal);
orderTotalCell.textContent = prettyOrderTotal;
import bikes from '../data/bikes.js';
import { CART_KEY } from '../products/render-bike.js';
import { renderTableRow } from './render-table-row.js';
import findById, { calcOrderTotal, makePrettyCurrency } from '../common/utils.js';
import { getCart } from '../products/render-bike.js';

const shoppingCartBody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const orderButton = document.getElementById('order-button');

let localCart = getCart();

localCart.forEach(lineItem => {
    const theBike = findById(bikes, lineItem.id);
    const domChange = renderTableRow(theBike, lineItem);

    shoppingCartBody.appendChild(domChange);
});

let orderTotal = calcOrderTotal(localCart, bikes);
let prettyOrderTotal = makePrettyCurrency(orderTotal);
orderTotalCell.textContent = prettyOrderTotal;

const submitButtonAction = () => {
    if (getCart() === null){
        orderButton.disabled = true;
    } else {
        orderButton.addEventListener('click', () => {
            let cartObj = getCart(CART_KEY);
            let messageString = `You have ordered: `;
            cartObj.forEach(cartItem => {
                messageString += `\n${cartItem.id}: ${cartItem.quantity}`;
            });
            alert(messageString);
            orderButton.setAttribute('disabled', 'disabled');
            localStorage.removeItem(CART_KEY);
            window.location.href = '../';
        });
    }
};

submitButtonAction();
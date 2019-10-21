import { makePrettyCurrency } from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export const renderTableRow = (bike, order) => {
    const productRow = document.createElement('tr');

    const productNameColumn = makeTd(bike.name);
    const quantityColumn = makeTd(order.quantity);

    const prettyPrice = makePrettyCurrency(bike.price);
    const individualProductPrice = makeTd(prettyPrice);

    const totalTotal = bike.price * order.quantity;
    const prettyTotal = makePrettyCurrency(totalTotal);
    const productSubtotal = makeTd(prettyTotal);

    productRow.appendChild(productNameColumn);
    productRow.appendChild(quantityColumn);
    productRow.appendChild(individualProductPrice);
    productRow.appendChild(productSubtotal);

    return productRow;
};
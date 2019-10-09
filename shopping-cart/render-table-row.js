import { makePrettyCurrency } from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export const renderTableRow = (bike, order) => {
    const tableRow = document.createElement('tr');

    // const columnOne = makeTd('nukeproof');
    // const columnTwo = makeTd('3');
    // const columnThree = makeTd('$4703.49');
    // const columnFour = makeTd('$14110.47');

    const columnOne = makeTd(bike.name);
    const columnTwo = makeTd(order.quantity);

    const prettyPrice = makePrettyCurrency(bike.price);
    const columnThree = makeTd(prettyPrice);

    const totalTotal = bike.price * order.quantity;
    const prettyTotal = makePrettyCurrency(totalTotal);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};
import findById, { calcLineItem, calcOrderTotal } from '../common/utils.js';
// import cartData from '../data/cart.js';
import bikes from '../data/bikes.js';
import { renderTableRow } from '../shopping-cart/render-table-row.js';
// import { makePrettyCurrency } from '../common/utils.js';

const test = QUnit.test;

test('find bike by ID', function(assert){
    //Arrange
    const bikeId = 'trek';

    const expected = {
        id: 'trek',
        name: 'Trek Domane 6.9',
        image: '../assets/trek.jpg',
        description: 'IsoSpeed decoupler that isolates the seat tube from the rest of the frameset for a more comfortable riding position',
        category: 'road',
        price: 6930.00
    };

    //Act 
    const foundId = findById(bikes, bikeId);
    //Assert
    assert.deepEqual(foundId, expected);
});

test('should calculate total of line number quantity * price', function(assert) {
    //Arrange
    const quantity = 3;
    const price = 6930.00;

    const expected = 20790;

    //Act 
    const total = calcLineItem(quantity, price);
    //Assert
    assert.deepEqual(total, expected);
});

test('should render a line item in for order table', function(assert) {
  //Arrange
    const nukeproof = {
        id: 'nukeproof',
        name: 'Nukeproof Mega',
        image: './assets/nukeproof.jpg',
        description: 'Alloy full-suspension mountain bike. Glide over the largest boulders. 27.5 inch wheels',
        category: 'enduro',
        price: 4703.49
    };

    const bikeOrder = {
        id: 'nukeproof',
        quantity: 3
    };

    const expected = '<tr><td>Nukeproof Mega</td><td>3</td><td>$4,703.49</td><td>$14,110.47</td></tr>';

  //Act 
    const bikeElementTableRow = renderTableRow(nukeproof, bikeOrder);
    const html = bikeElementTableRow.outerHTML;
  //Assert
    assert.equal(html, expected);
});

test('should calculate total cost of all line items', function(assert) {
  //Arrange
    const cartArr = [{
        id: 'nukeproof',
        quantity: 2
    }, {
        id: 'yeti',
        quantity: 5
    }, {
        id: 'colnago',
        quantity: 1
    }, {
        id: 'trek',
        quantity: 4
    }];

    const expected = 70321.93;

  //Act 
    const orderTotal = calcOrderTotal(cartArr, bikes);
  //Assert
    assert.equal(orderTotal, expected);
});
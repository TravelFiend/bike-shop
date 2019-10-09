import findById, { calcLineItem } from '../common/utils.js';
// import cartData from '../data/cart.js';
import bikes from '../data/bikes.js';

const test = QUnit.test;

test('find bike by ID', function(assert){
    //Arrange
    const bikeId = 'trek';

    const expected = "{id: 'trek', name: 'Trek Domane 6.9', image: '../assets/trek.jpg', description: 'IsoSpeed decoupler that isolates the seat tube from the rest of the frameset for a more comfortable riding position', category: 'road', price: 6930.00}";

    //Act 
    const foundId = findById(bikes, bikeId);
    const html = foundId.outerHTML;
    //Assert
    assert.deepEqual(html, expected);
});

test('calculates total of line number quantity * price', function(assert) {
    //Arrange
    const quantity = 3;
    const price = 6930.00;

    const expected = 20790;

    //Act 
    const total = calcLineItem(quantity, price);
    //Assert
    assert.deepEqual(total, expected);
});
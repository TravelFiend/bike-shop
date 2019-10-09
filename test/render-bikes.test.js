// IMPORT MODULES under test here:
import renderBike from '../products/render-bike.js';

const test = QUnit.test;

test('renders a bike', function(assert) {
    //Arrange
    const nukeproof = {
        id: 'nukeproof',
        name: 'Nukeproof Mega',
        image: './assets/nukeproof.jpg',
        description: 'Alloy full-suspension mountain bike. Glide over the largest boulders. 27.5 inch wheels',
        category: 'enduro',
        price: 4703.49
    };

    const expected = '<li class="enduro" title="Alloy full-suspension mountain bike. Glide over the largest boulders. 27.5 inch wheels"><h3>Nukeproof Mega</h3><img src="./assets/nukeproof.jpg" alt="Nukeproof Mega image"><div class="price-and-add"><div class="price">$4703.49</div><button value="nukeproof">Add to cart</button><details>Alloy full-suspension mountain bike. Glide over the largest boulders. 27.5 inch wheels</details></div></li>';

    //Act 
    const dom = renderBike(nukeproof);
    const html = dom.outerHTML;
    //Assert
    assert.equal(html, expected);
});

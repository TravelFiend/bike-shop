import bikes from '../data/bikes.js';
import renderBike from './render-bike.js';

const items = document.getElementById('bikes');

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const dom = renderBike(bike);
    items.appendChild(dom);
}
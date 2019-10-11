// import findById from '../common/utils.js';
let emptyCart = [];
export const CART_KEY = 'cart';

export const addToCart = (theCart, id) => {
    let present = false;
    theCart.forEach(item => {
        if (item.id === id){
            item.quantity++;
            present = true;
        }
    });
    if (present){
        return;
    } else {
        const newItem = {
            id: id,
            quantity: 1,
        };
        theCart.push(newItem);
    }
};

const makeCart = () => {
    let jsonCart = JSON.stringify(emptyCart);
    localStorage.setItem(CART_KEY, jsonCart);
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

const setCart = (localStorageCart) => {
    const jsonNew = JSON.stringify(localStorageCart);
    localStorage.setItem(CART_KEY, jsonNew);
};

const renderBike = bike => {
    const li = document.createElement('li');
    li.className = bike.category;
    li.title = bike.description;

    const h3 = document.createElement('h3');
    h3.textContent = bike.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = bike.image;
    img.alt = `${bike.name} image`;
    li.appendChild(img);

    const div = document.createElement('div');
    div.className = 'price-and-add';
    li.appendChild(div);

    const childDiv = document.createElement('div');
    childDiv.className = 'price';
    const priced = `$${bike.price.toFixed(2)}`;
    childDiv.textContent = priced;
    div.appendChild(childDiv);

    const myButton = document.createElement('button');
    myButton.textContent = 'Add to cart';
    myButton.value = bike.id;
    myButton.addEventListener('click', () => {
        let localStorageCart = getCart();
        if (!localStorageCart){
            makeCart();
            localStorageCart = getCart();
            console.log(`I made a cart`);
        }
        
        // console.log('bike id', bike.id);
        addToCart(localStorageCart, bike.id);
        // console.log('localstoargecart', localStorageCart);
        
        setCart(localStorageCart);
        console.log(localStorageCart);
    });
    div.appendChild(myButton);

    const details = document.createElement('details');
    details.textContent = bike.description;
    div.appendChild(details);

    return li;
};




export default renderBike;
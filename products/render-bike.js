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

export const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

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

    const productImg = document.createElement('img');
    productImg.src = bike.image;
    productImg.alt = `${bike.name} image`;
    li.appendChild(productImg);

    const purchaseInfo = document.createElement('div');
    purchaseInfo.className = 'price-and-add';
    li.appendChild(purchaseInfo);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    const priced = `$${bike.price.toFixed(2)}`;
    priceDiv.textContent = priced;
    purchaseInfo.appendChild(priceDiv);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to cart';
    addToCartButton.value = bike.id;
    addToCartButton.addEventListener('click', () => {
        let localStorageCart = getCart();
        if (!localStorageCart){
            makeCart();
            localStorageCart = getCart();
        }
        
        // console.log('bike id', bike.id);
        addToCart(localStorageCart, bike.id);
        // console.log('localstoargecart', localStorageCart);
        
        setCart(localStorageCart);
    });
    purchaseInfo.appendChild(addToCartButton);

    const productDescription = document.createElement('details');
    productDescription.textContent = bike.description;
    purchaseInfo.appendChild(productDescription);

    return li;
};

export default renderBike;
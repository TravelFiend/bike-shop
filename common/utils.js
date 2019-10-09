export const makePrettyCurrency = (number) => {
    const dolla = number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return dolla;
};

const findById = (bikeList, bikesId) => {
    for (var i = 0; i < bikeList.length; i++){
        const bike = bikeList[i];
        if (bike.id === bikesId) {
            return bike;
        }
    }
    return null;
};

export default findById;

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export const calcLineItem = (quantity, price) => {
    return roundCurrency(quantity * price);
};

export const calcOrderTotal = (cartArr, bikeObjArr) => {
    let orderTotal = 0;
    for (let i = 0; i < cartArr.length; i++){
        let bike = findById(bikeObjArr, cartArr[i].id);
        let lineTotal = calcLineItem(cartArr[i].quantity, bike.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
};
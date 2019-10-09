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
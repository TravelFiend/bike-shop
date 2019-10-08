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

    const details = document.createElement('details');
    details.textContent = bike.description;
    li.appendChild(details);

    const div = document.createElement('div');
    div.className = 'price-and-add';
    li.appendChild(div);

    const childDiv = document.createElement('div');
    childDiv.className = 'price';
    const priced = `$${bike.price.toFixed(2)}`;
    childDiv.textContent = priced;
    div.appendChild(childDiv);

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = bike.id;
    div.appendChild(button);

    return li;
};

export default renderBike;
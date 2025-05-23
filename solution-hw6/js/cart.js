// retrieve cart from local storage upon loading

retrieveFromLocalStorage();

// call functions to create roll in the cart array, update relevant attributes

for (const roll of cart) {
    createCartElement(roll);
    updateCartElement(roll);
}

function createCartElement(roll) {

    // retrieves template from HTML and creates clone

    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart-item');

    // connects remove button to a function that deletes the cart item

    const removeOption = roll.element.querySelector('.remove');
    removeOption.addEventListener('click', () => {
        deleteCartItem(roll)
    });

    // modifies the DOM to display the correct number of clones

    const cartList = document.querySelector('.cart-list');
    cartList.append(roll.element);

}

function deleteCartItem(roll) {

    // gets index of the roll that needs to be deleted

    rollIndex = cart.indexOf(roll);

    // removes the roll from the cart array and the DOM

    roll.element.remove();
    cart.splice(rollIndex, 1);

    // update local storage to account for removed roll

    saveToLocalStorage();

    // calls function to update the total price, print entire cart array

    updateTotal();
    console.log(cart);

}

function updateCartElement(roll) {

    // retrieves the image, name, glazing, pack size, and price elements to apply updates

    const rollImage = roll.element.querySelector('.small-bun-image');
    const rollType = roll.element.querySelector('.roll-name');
    const rollGlazing = roll.element.querySelector('.roll-glaze');
    const rollPackSize = roll.element.querySelector('.roll-pack');
    const rollPrice = roll.element.querySelector('.item-price');

    // initiate variable to reflect the calculated price of the cart item

    const rollCalcPrice = calculatePrice(roll);

    // replace the elements that were retrieved above with the corresponding information

    rollImage.src = './assets/products/' + rolls[roll.type]["imageFile"];
    rollType.innerText = roll.type + ' Cinnamon Roll';
    rollGlazing.innerText = 'Glazing: ' + roll.glazing;
    rollPackSize.innerText = 'Pack Size: ' + roll.size;
    rollPrice.innerText = '$ ' + rollCalcPrice;

}

// calculate the cart item price given its base price, glazing, and pack size selections

function calculatePrice(roll) {

    // initialize base price variable to be used in calculation later

    let basePrice = roll.basePrice;

    // initialize glazing price

    let glazingPrice = 0;

    // identify and assign glazing price by comparing glazing selection to all available choices

    for (const choice of allGlazing) {
        if (choice['type'] === roll.glazing)  {
            glazingPrice = choice.priceAdd;
        }
    }

    // initialize pack price

    let packPrice = 0;

    // identify and assign pack price by comparing pack size selection to all available choices

    for (const choice of allPacks) {
        if (choice['size'] === roll.size)  {
            packPrice = choice.priceMultiply;
        }
    }

    // calculate item price based on base price, glazing price, and pack price

    let itemPrice = (basePrice + glazingPrice) * packPrice;

    // rounded version of item price, returns this value to display 

    let roundedPrice = itemPrice.toFixed(2);
    return roundedPrice;
}

// calls function to update cart total

updateTotal();

function updateTotal() {

    // retrieves total element from DOM, intialize total price variable

    let cartTotal = document.querySelector('#total-price');
    let totalPrice = 0;

    // calculate total price by adding listing prices together

    for (const roll of cart) {
        let price = calculatePrice(roll);
        totalPrice = totalPrice + parseFloat(price);
    }
    
    // update total element with new value, including units and decimal place specification

    cartTotal.innerText = '$ ' + totalPrice.toFixed(2);

}
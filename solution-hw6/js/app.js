// retrieve glazing select element from HTML to modify

let glazingOptions = document.querySelector('#glazing-customize');

// populate glazing dropdown menu with all options available

for (let i = 0; i < allGlazing.length; i++) 
{
    let current = allGlazing[i];
    let option = document.createElement('option');
    option.text = current.type;
    option.value = current.priceAdd;

    glazingOptions.add(option);
}

// retrieve pack size select element from HTML to modify

let packOptions = document.querySelector('#pack-customize');

// populate pack size dropdown menu with all options available

for (let i = 0; i < allPacks.length; i++) 
{
    let current = allPacks[i];
    let option = document.createElement('option');
    option.text = current.size;
    option.value = current.priceMultiply;

    packOptions.add(option);
}

// code provided by hw4 instructions, acquire roll type from URL

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// retrieve roll image, name, and price displayed from DOM

let rollImage = document.querySelector('.big-bun-image');
let rollName = document.querySelector('.page-heading');
let displayPrice = document.querySelector('.big-bun-price');

// set base price as database specified according to roll type

let basePrice = rolls[rollType]["basePrice"];

// assign respective images, names, and base prices to the rolls we have

rollImage.src = './assets/products/' + rolls[rollType]["imageFile"];
rollName.innerText = rollType + ' Cinnamon Roll';
displayPrice.innerText = '$ ' + basePrice;

// retrieve cart from local storage upon loading

retrieveFromLocalStorage();

// add event listeners to glazing and pack size dropdowns, reacting on change

glazingOptions.addEventListener('change', onSelectValueChange);
packOptions.addEventListener('change', onSelectValueChange);

// function to update the price displayed based on the glazing and pack options

function onSelectValueChange() 
{
    // get price additions and factors for glazing and pack size modifications respectively

    let glazingPrice = parseFloat(glazingOptions.value);
    let packPrice = parseFloat(packOptions.value);

    // calculate item price based on base price, glazing price, and pack price

    let itemPrice = (basePrice + glazingPrice) * packPrice;

    // rounded version of price with units for better display 

    let roundedPrice = '$ ' + itemPrice.toFixed(2);

    // update webpage HTML with accurate price

    displayPrice.innerText = roundedPrice;
}

// retrieve cart button from DOM and add an event listener for clicks

let cartButton = document.querySelector('.add-to-cart');
cartButton.addEventListener('click', addRollToCart);

// function to add selected roll to the cart

function addRollToCart() {
    
    // locate index to find type of glazing

    let glazingIndex = glazingOptions.selectedIndex;
    let rollGlazing = allGlazing[glazingIndex]['type'];

    // locate index to find pack size

    let packIndex = packOptions.selectedIndex;
    let packSize = allPacks[packIndex]['size'];

    // create new instance of the roll class with the given parameters

    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);

    // add selected roll to the cart

    cart.push(roll);

    // call function to save updated cart to local storage

    saveToLocalStorage(cart);

    // print entire cart array

    console.log(cart);

}
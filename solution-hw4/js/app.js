// create object for all glazing options

let allGlazing = [
    {
        type: 'Keep original', 
        priceAdd: 0.00
    },

    {
        type: 'Sugar milk',
        priceAdd: 0.00
    },

    {
        type: 'Vanilla milk', 
        priceAdd: 0.50
    },

    {
        type: 'Double chocolate', 
        priceAdd: 1.50
    }
]

// create object for all pack size options

let allPacks = [
    {
        size: 1, 
        priceMultiply: 1
    },

    {
        size: 3, 
        priceMultiply: 3
    },

    {
        size: 6, 
        priceMultiply: 5
    },

    {
        size: 12, 
        priceMultiply: 10
    }
]

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

var rollImage = document.querySelector('.big-bun-image');
var rollName = document.querySelector('.page-heading');
var displayPrice = document.querySelector('.big-bun-price');

// set base price as database specified according to roll type

var basePrice = rolls[rollType]["basePrice"]

// assign respective images, names, and base prices to the rolls we have

rollImage.src = './assets/products/' + rolls[rollType]["imageFile"];
rollName.innerText = rollType + ' Cinnamon Roll';
displayPrice.innerText = '$ ' + basePrice;

// price react to different customer selections

glazingOptions.addEventListener('change', onSelectValueChange);
packOptions.addEventListener('change', onSelectValueChange);

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

// code provided by hw4 instructions, standardizing properties of roll class

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// create empty array for cart, will be filled with roll class instances

let cart = new Array();

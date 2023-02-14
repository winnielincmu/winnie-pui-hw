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

// price react to different customer selections

glazingOptions.addEventListener('change', onSelectValueChange);
packOptions.addEventListener('change', onSelectValueChange);

function onSelectValueChange() 
{

    // get price additions and factors for glazing and pack size modifications respectively

    let glazingPrice = parseFloat(glazingOptions.value);
    let packPrice = parseFloat(packOptions.value);

    // set the value of the base price as provided by the instructions

    const basePrice = 2.49;

    // retrieve price element from HTML to modify

    let displayPrice = document.querySelector('.big-bun-price');

    // calculate item price based on base price, glazing price, and pack price

    let itemPrice = (basePrice + glazingPrice) * packPrice;

    // rounded version of price with units for better display 

    let roundedPrice = '$ ' + itemPrice.toFixed(2);

    // update webpage HTML with accurate price

    displayPrice.innerText = roundedPrice;

}
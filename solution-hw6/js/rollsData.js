// database for different types of rolls with base price and image

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
}

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
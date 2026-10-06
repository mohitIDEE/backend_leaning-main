const customerName = "John Doe";
const productName = "laptop";
const priceCents = 99999; // price in cents
const isavailable = true;

let quantity = 2; // quantity of the product

// Calculate total price in cents
const totalPriceCents = priceCents * quantity;

// Convert total price to dollars
const totalPriceDollars = totalPriceCents / 100;

// Function to display the bill
function displayBill(cName , pName, priceCents, quantity, totalPriceDollars, isavailable) {
    console.log(`Customer Name: ${cName}`);
    console.log(`Product Name: ${pName}`);
    console.log(`Price per unit: $${(priceCents / 100).toFixed(2)}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total Price: $${totalPriceDollars.toFixed(2)}`);
    console.log(`Availability: ${isavailable ? "In Stock" : "Out of Stock"}`);
}

// Call the function to display the bill
displayBill("Mohit", "laptop", 5648, 2, 199.998, true);
displayBill("rohit", "laptop", 564, 5, 19.998, false);

function parsequantity(quantityText) {
    if ( quantityText.trim() === "") {
        return{
            valid: false,
            message: "Quantity cannot be empty."
        };
    }

    const quantity = Number (quantityText);

    if(isNaN(quantity) || quantity <= 0) {
        return{
            valid: false,
            message: "Quantity must be a positive number."
        };
    }

    if(!Number.isInteger(quantity)) {
        return{
            valid: false,
            message: "Quantity must be an integer."
        };
    }

    return{
        valid: true,
        quantity: quantity
    };
}


function calculateRewardPoints(totalPriceDollars) {
    if (totalPriceDollars >= 1000) {
        return 100; // 100 points for purchases $1000 and above
    } else if (totalPriceDollars >= 500) {
        return 50; // 50 points for purchases $500 and above
    }   else if (totalPriceDollars >= 100) {
        return 10; // 10 points for purchases $100 and above
    } else {
    return 0; // No points for purchases below $100
}
}

const rewardPoints = calculateRewardPoints(totalPriceDollars);
console.log(`Reward Points Earned: ${rewardPoints}`);


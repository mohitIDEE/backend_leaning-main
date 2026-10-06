const customerName = "John Doe";
const productName = "laptop";
const priceCents = 9999; // price in cents
const isavailable = true;

let quantity = 2; // quantity of the product

// Calculate total price in cents
const totalPriceCents = priceCents * quantity;

// Convert total price to dollars
const totalPriceDollars = totalPriceCents / 10;

// Function to display the bill
function displayBill(cName , pName, priceCents, quantity, isavailable) {
    console.log(`Customer Name: ${cName}`);
    console.log(`Product Name: ${pName}`);
    console.log(`Price per unit: $${(priceCents / 10).toFixed(2)}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total Price: $${totalPriceDollars.toFixed(2)}`);
    console.log(`Availability: ${isavailable ? "In Stock" : "Out of Stock"}`);
}

// Call the function to display the bill
displayBill("Mohit", "laptop", 56000, 2,  true);
console.log("--------------------------------------------------");
// second call to displayBill function with different parameters
displayBill("rohit", "laptop", 56402, 5, false);

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

function applyDiscount(totalPriceDollars, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        console.log("Invalid discount percentage. It must be between 0 and 100.");
        return totalPriceDollars;
    }
    const discountAmount = (totalPriceDollars * discountPercentage) / 100;
    return totalPriceDollars - discountAmount;
}

const discountedPrice = applyDiscount(totalPriceDollars, 15); // Applying a 15% discount
console.log(`Discounted Price after 5% discount: $${discountedPrice.toFixed(2)}`);
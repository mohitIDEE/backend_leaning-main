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
function displayBill() {
    console.log(`Customer Name: ${customerName}`);
    console.log(`Product Name: ${productName}`);
    console.log(`Price per unit: $${(priceCents / 100).toFixed(2)}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Total Price: $${totalPriceDollars.toFixed(2)}`);
    console.log(`Availability: ${isavailable ? "In Stock" : "Out of Stock"}`);
}

// Call the function to display the bill
displayBill();

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


const testInputs = [
  "5",
  "",
  "abc",
  "0",
  "-2",
  "2.5"
];

for (const input of testInputs) {
  const result = parsequantity(input);

  console.log(`Input: "${input}"`);
  console.log(result);
}
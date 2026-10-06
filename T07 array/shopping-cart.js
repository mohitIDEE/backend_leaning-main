console.log("Welcome to the Shopping Cart Application!");

//create prodducts array 

products = [
    {id:1, name:"Laptop", priceCents: 1000,stock: 10,description:"A high-performance laptop suitable for work and gaming."},
    {id:2, name:"Mobile", priceCents: 500,stock: 20,description:"A sleek and powerful smartphone."},
    {id:3, name:"Tablet", priceCents: 300,stock: 15,description:"A versatile tablet for entertainment and productivity."},
    {id:4, name:"Headphones", priceCents: 100,stock: 25,description:"High-quality wireless headphones for immersive audio."},
    {id:5, name:"Smartwatch", priceCents: 200,stock: 30,description:"A feature-rich smartwatch for fitness and connectivity."},
    {id:6, name:"Camera", priceCents: 800,stock: 5,description:"A professional-grade camera for photography enthusiasts."},
    {id:7, name:"Printer", priceCents: 150,stock: 10,description:"A reliable printer for home and office use."},
    {id:8, name:"Monitor", priceCents: 250,stock: 8,description:"A high-resolution monitor for clear visuals."},
    {id:9, name:"Keyboard", priceCents: 50,stock: 20,description:"A comfortable keyboard for efficient typing."},
    {id:10, name:"Mouse", priceCents: 30,stock: 15,description:"A precise mouse for smooth navigation."}
];

console.log("\n== Products Available ==");

for (const product of products) {
    console.log(product);
}

console.log("\n== Products");

console.log("dot notation",products[0].name);
console.log("bracket notation",products[0]["priceCents"]);

console.log(
    "dynamic field access",
    products[0]["name"]
)

const cart = [
    { productsid: 1, quantity: 2 },
    { productsid: 3, quantity: 1 },
    { productsid: 5, quantity: 3 }
];


console.log("\n== Cart Items ==");

console.log(cart);

cart.push({ productsid: 2, quantity: 1 });

console.log("\n== Cart Items After Adding a New Item ==");

console.log(cart);

cart[0].quantity = 3;
cart[2].quantity = 2;


console.log("\n== Cart Items After Updating Quantity =="); 

console.log(cart);

const totalPriceCents = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productsid);
    return total + (product.priceCents * item.quantity);
}, 0);  
console.log("\n== Total Price ==");
console.log(totalPriceCents);
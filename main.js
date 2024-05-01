// Exploring Conditional Statements and Loops


// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

let isLoggedIn = true;

if (isLoggedIn) {
    console.log('Items added to cart.');
} else {
    console.log('Please log in to add items to your cart.');
}

let products = ['Cpu', 'Gpu', 'Ram', 'Motherboard', 'Power Supply', 'Case', 'Cooler', 'Storage'];

let cart = [];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

function addToCart(product) {
    cart.push(product);
}

addToCart('Cpu');
addToCart('Gpu');
addToCart('Ram');
addToCart('Motherboard');
addToCart('Power Supply');
addToCart('Case');
addToCart('Cooler');
addToCart('Storage');

let totalCost = 0;

for (let i = 0; i < cart.length; i++) {
    totalCost += 200;
}

console.log('Checkout: $' + totalCost);


// Exploring Functions in JavaScript


// Task 1: Create a function to handle deposits into a bank account.

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

// Task 3: Develop a function to check the current balance of the account.

let balance = 10000000;

function deposits(amount){
    balance += amount;
    console.log('Deposited an amount of $' + amount);
}

function withdrawals(amount){
    if (balance >= amount) {
        balance -= amount;
        console.log('Withdrawn: $' + amount);
    } else {
        console.log('Insufficient balance.');
    }
}

function checkBalance(){
    console.log('Current Balance: $' + balance);
}

deposits(1);
withdrawals(10000002);
checkBalance();



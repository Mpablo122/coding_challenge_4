//"Task 1 - Customer Discounts."
let purchaseamount = 200
let finaldiscounted_price = purchaseamount;
if (purchaseamount > 100) {
    discounted_price = purchaseamount * 0.2;
    finaldiscounted_price = purchaseamount - discounted_price
    console.log("20% off")

}
console.log(`Final price after discount: $${finaldiscounted_price}`);

// "Task 2 - Sales Report."

let sales = [120, 85, 200, 150, 90]
let totalsales = 0
for (let index = 0; index < sales.length; index++) {
    totalsales += sales[index];
    
}
console.log (`Total Sales: $${totalsales}`);


//  "Task 3 - Inventory Depletion."

let stock = 10
while (stock > 0) {
    console.log("Stocks left is:" , stock);
    stock--; // subtracting stocks 1 by 1
}

//"Task 4 - Customer Survey."
let responses = 0 
do {
    console.log ("Collection of responses:", responses);
    responses++;
} while (responses < 3);

//"Task 5 - "Employee Information." for in loop
let employee = {
    name: "Alice", 
    position: "Manager",
    salary: 75000
}
for (let key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key + ":" +element)
    }
}

//"Task 6 - Product Listings." for of loop
let products = ["Laptop", "Mouse", "Keyboard"]

for (const element of products) {
    console.log("Products:" + element);
    
}

// "Task 7 - Order Processing." foreach
let orders = [101, 102, 103]
orders.forEach(element => {
        console.log("Order ID: " + element)
});

// "Task 8: Tax Calculation"

function calculateTax(amount) {
    return amount * 0.30;
}

console.log("Return of calculated tax:", calculateTax(1000));

// "Task 9 - Discount Application."
function applydiscount(number) {
    return number * 0.40
}
console.log("Discount is:" , applydiscount(400))
PriceAfterDiscount = 400 - applydiscount(400)
console.log("Price After 40% discount", PriceAfterDiscount )

//
const calculatePoints = (amountpurchased) => {
    return amountpurchased / 10;
}

//"Task 10 - Loyalty Points."

let points = calculatePoints(100);
console.log("Earned Points:" + points)
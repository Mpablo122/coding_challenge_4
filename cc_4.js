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






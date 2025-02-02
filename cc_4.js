//"Task 1 - Customer Discounts."
let purchaseamount = 200
let discounted_amount = purchaseamount;
if (purchaseamount > 100) {
    let discounted_amount = purchaseamount * 0.2;
    finalprice = purchaseamount - discounted_amount; //get finalized amount
    console.log("20% off")

}
console.log(`Final price after discount: $${finalprice}`);

// "Task 2 - Sales Report."

let sales = [120, 85, 200, 150, 90]
let totalsales = 0
for (let index = 0; index < sales.length; index++) {
    totalsales += sales[index];
    
}
console.log (`Total Sales: $${totalsales}`);






// Task 1: Using ternary operator to determine tip
let bill = 175;
let tip = bill >= 100 ? bill * 0.25 : bill * 0.18;
console.log (`Tip: $${tip}`)

// Task 2: Output Details
let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`)

// Task 3: Create a Function for tips
function calculateTip(bill) {
    return bill >= 100 ? bill * 0.25 : bill * 0.18;}

// Testing function with $100 bill
let billValue = 100
let tipQuantity = calculateTip (billValue);
let totalValue = billValue + tipQuantity;
console.log(`For a bill of $${billValue}, the tip is $${tipQuantity}, and the total amount is $${totalValue}`);

// Task 4 Utilizing Arrays
// Data Set 1
const bills1 = [275, 40, 430];
const tips1 = bills1.map(calculateTip);
const totals1 = bills1.map((bill, index) => bill + tips1[index]);

console.log("Data Set1:",{
    Bills: bills1,
    Tips: tips1,
    Totals: totals1
});

// Test Data Set 2
const bills2 = [125, 555, 44];
const tips2 = bills2.map(calculateTip);
const totals2 = bills2.map((bill, index) => bill + tips1[index]);

console.log("Data Set1:",{
    Bills: bills2,
    Tips: tips2,
    Totals: totals2
});
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

// Using ternary operator to determine tip
let bill = 175;
let tip = bill >= 100 ? bill * 0.25 : bill * 0.18;
console.log (`Tip: $${tip}`)

// Output Details
let total = bill + tip;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`)
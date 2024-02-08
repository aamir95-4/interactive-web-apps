const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = "00";
const minuteOfDay = "00";

// Only change below this line

if (
  hourOfDay !== null &&
  minuteOfDay !== null &&
  hourOfDay === "00" &&
  minuteOfDay === "00"
) {
  const taxAsDecimal = parseInt(tax) / "100";
  const startingAfterTax = salary - taxAsDecimal * salary;
  const balance = startingAfterTax - transport - food - rent;

  console.log(balance.toFixed(2));
}

// 1. Had to add "" to the 00
// 2. Changed console.log to 'toFixed(2)' and moved into the if statement, was not working when out of if statement
// 3. added 'parseInt' to 'tax' to coerce to int

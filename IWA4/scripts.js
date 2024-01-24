let date = 2050;
let status = "student";
let count = 0;

if ((date = 2050)) {
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  console.log("August", "Women’s Day");
  console.log("September", "Heritage Day");
  console.log(date, "Day of Reconciliation");
  console.log(date, "Day of Goodwill");
  count = count + 8;

  if (status === "student") {
    console.log("June", "Youth Day");
    count = count + 1;
  }

  if (status === "parent") {
    console.log(date, "Christmas Day");
    count = count + 1;
  }
}

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", count);

// 1. changed to let from const
// 2. moved if statements to bottom so I could read the code better, and made all
// the other holidays to just change the count once
// 3. changed 'status =' to 'status  ===', = seemed to be changing the value of 'status'

const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: new Date(`16 December ${currentYear}`),
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  holidays[futureId]
    ? holidays[futureId].name
    : "ID " + futureId + " not created yet"
);

copied = holidays[6];
copied.name = "X-mas Day";
correctDate = new Date(`25 December ${currentYear} 00:00`);
isEarlier = correctDate < holidays[6].date;
console.log("New date is earlier:", isEarlier);
if (isEarlier) copied.date = correctDate;
console.log("ID change:", holidays[6].id != copied.id ? true : false);
console.log(
  "Name change:",
  holidays[6].name === copied.name ? copied.name : false
);
console.log(
  "Date change:",
  " " +
    holidays[6].date.getDate() +
    " / " +
    [holidays[6].date.getMonth() + 1] +
    " / " +
    holidays[6].date.getFullYear() +
    ""
);

const arrOfDates = [
  holidays[0].date,
  holidays[1].date,
  holidays[2].date,
  holidays[3].date,
  holidays[4].date,
  holidays[5].date,
  holidays[6].date,
  holidays[7].date,
  holidays[8].date,
];

console.log(arrOfDates);

const firstHoliday = new Date(Math.min(...arrOfDates));
const lastHoliday = new Date(Math.max(...arrOfDates));

console.log(firstHoliday.toLocaleDateString());

console.log(lastHoliday.toLocaleDateString());

const random = parseInt(Math.random() * 9);
const randomHoliday = arrOfDates[random];

console.log(randomHoliday.toLocaleDateString());

/* 1. Changed console.log(holidays.futureId.name || 'ID {futureId} not created yet') to an if statement
|* 2. set correct date to new date with new time, alternatively could have used .setHours and .setMinutes
|*    I couldn't figure out how to use .setHours and .setMinutes
|* 3. Changed the first and last holiday calculations to have one array of the dates and select the min
|*    and max from that array. Found and used .toLocaleDateString to return correct date format.
|* 4. After some research, found that math.random only gives a number between 0 and 1
|*    so I used parseInt to make sure it is a round number and multiplied by 9 to get a number between 0 and 8.
*/

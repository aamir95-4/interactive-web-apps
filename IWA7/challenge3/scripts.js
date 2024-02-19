const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed =
  parseFloat(Math.abs(leoBalance)) + parseFloat(Math.abs(sarahBalance));
const thousands = parseInt(owed / 1000);
const hundreds = (owed % 1000).toFixed(2);
const leo =
  " " + leoName + " " + leoSurname + "  (Owed  R " + Math.abs(leoBalance) + ")";
const sarah =
  "" +
  sarahName.trim() +
  " " +
  sarahSurname +
  "  (Owed  R " +
  Math.abs(sarahBalance) +
  ")";
const total = "  Total amount owed: ";
const result =
  " \n" +
  leo +
  " \n " +
  sarah +
  " \n \n " +
  divider +
  " \n " +
  total +
  " R " +
  thousands +
  " " +
  hundreds +
  "\n" +
  divider +
  " ";

console.log(result);

/* Used parseFloat instead of parseInt in owed variable to make
|* sure the decimal was taken from sarah balance.
|* Used .toFixed(2) in the owed variable in result to ensure both decimal
|* points for the cents were shown.
|* fixed variable to show strings correctly with the variables.
|* Used \n to create new lines and spaces.
|* Can't figure out how to add the thousands separator.
*/

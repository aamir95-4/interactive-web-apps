const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log("Good morning,", nickname);
} else if (firstname) {
  console.log("Good morning,", firstname);
} else {
  console.log("Good morning!");
}

/* Used if statements to change the console log to show correctly, 
I couldn't figure out how to make the 
'console.log("Good Morning, ${nickname} || {firstname}!")' line work*/

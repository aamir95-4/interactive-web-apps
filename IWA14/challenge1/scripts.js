const firstName = "John";
const age = 35;
const hobby = "Coding";

const parameter = `Hello, ${firstName} (${age}). I love ${hobby}!`;

const logTwice = () => {
  console.log(parameter);
  console.log(parameter);
};

logTwice();

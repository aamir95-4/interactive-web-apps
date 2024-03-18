const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

const primaryValid = Boolean(parseInt(primaryPhone));
const secondaryValid = Boolean(parseInt(secondaryPhone));

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);

// 1. changed validations to check for the boolean of the primary and seconday phone as an integer,
// because the integer of primary phone will return NaN which is falsey

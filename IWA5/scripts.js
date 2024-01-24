FREE_WARNING = "Free shipping only applies to single customer orders";
BANNED_WARNIN = "Unfortunately we do not ship to your country of residence";
NONE_SELECTED = 0;

let customers = 1;
let country = "RSA";
let currency = "$";
let shipping;
let basket;

if (country === "RSA") {
  shipping = 400;
  currency = "R";
}

if (country === "NAM") {
  shipping = 600;
}

if (country !== "RSA" && country !== "NAM") {
  shipping = 800;
}

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED;

basket = shoes + toys + shirts + batteries + pens;

if (basket > 1000 && (country === "RSA" || country === "NAM")) {
  shipping = 0;
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

location === "NK"
  ? console.log(BANNED_WARNIN)
  : console.log("price", currency, basket + shipping);

//   1. Original Code: Host of errors with brackets and operators.
//   2. For some reason, I could not use the 'location' variable, so changed it to 'country'
//   3. There is no conversion of currency, so I am not sure if I was supposed to add it
//      which means free shipping to "RSA" or "NAM" is anything over 1000
//   4. Not sure what "calcShipping" is, there was no variable declared
//   5. Moved variables to top and added "let"

// FREE_WARNING = 'Free shipping only applies to single customer orders'
// BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
// NONE_SELECTED = '0'

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600
// else shipping = 800

// shoes = 300 * 1
// toys - 100 * 5
// shirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED'

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null

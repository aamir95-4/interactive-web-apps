import { company, year } from "./configuration.js";

console.log(company, year);

const message = "© " + company + " (" + year + ")";
document.querySelector(".footer").innerText = message;

// 3. added brackets around company and year in import tags, 'from' was mis-spelled

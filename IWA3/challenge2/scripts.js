// Import data for Nwwabisa
import { firstname as nwabisaFirstname } from "./nwabisa.js";
import { surname as nwabisaSurname } from "./nwabisa.js";
import { role as nwabisaRole } from "./nwabisa.js";

// Import date for Johannes
import { firstname as johannesFirstname } from "./johannes.js";
import { surname as johannesSurname } from "./johannes.js";
import { role as johannesRole } from "./johannes.js";

// Import data for Alex
import { firstname as alexFirstname } from "./alex.js";
import { surname as alexSurname } from "./alex.js";
import { role as alexRole } from "./alex.js";

// Combine names and roles data to display in console log
const displayNwabisa =
  nwabisaFirstname + " " + nwabisaSurname + " (" + nwabisaRole + ")";
document.querySelector("#nwabisa").innerText = displayNwabisa;

const displayJohannes =
  johannesFirstname + " " + johannesSurname + " (" + johannesRole + ")";
document.querySelector("#johannes").innerText = displayJohannes;

const displayAlex = alexFirstname + " " + alexSurname + " (" + alexRole + ")";
document.querySelector("#alex").innerText = displayAlex;

console.log("Roles:", nwabisaRole, ",", johannesRole, ",", alexRole);

// imported all the const from nwabisa, johannes, alex js files and created the display variables here

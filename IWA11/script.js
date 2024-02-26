// Root One code: querying dataset from html
const rootOne = document.querySelector('[data-key="order1"');
const biscuitsOne = rootOne.dataset.biscuits;
const donutsOne = rootOne.dataset.donuts;
const pancakesOne = rootOne.dataset.pancakes;
const statusOne = rootOne.dataset.delivered;

const rootTwo = document.querySelector('[data-key="order2"');
const biscuitsTwo = rootTwo.dataset.biscuits;
const donutsTwo = rootTwo.dataset.donuts;
const PancakesTwo = rootTwo.dataset.pancakes;
const statusTwo = rootTwo.dataset.delivered;

const rootThree = document.querySelector('[data-key="order3"');
const biscuitsThree = rootThree.dataset.biscuits;
const donutsThree = rootThree.dataset.donuts;
const pancakesThree = rootThree.dataset.pancakes;
const statusThree = rootThree.dataset.delivered;
//----------------------------------------------------------------------------//

// Inserting innerText from datasets into html
document.querySelector('[data-key="order1"] > .biscuits > .count').innerText =
  biscuitsOne;
document.querySelector('[data-key="order1"] > .donuts > .count').innerText =
  donutsOne;
document.querySelector('[data-key="order1"] > .pancakes > .count').innerText =
  pancakesOne;
document.querySelector('[data-key="order1"] > .status > dd').innerText =
  statusOne === "true" ? "Delivered" : "Pending";
//----------------------------------------------------------------------------//
document.querySelector('[data-key="order2"] > .biscuits > .count').innerText =
  biscuitsTwo;
document.querySelector('[data-key="order2"] > .donuts > .count').innerText =
  donutsTwo;
document.querySelector('[data-key="order2"] > .pancakes > .count').innerText =
  PancakesTwo;
document.querySelector('[data-key="order2"] > .status > dd').innerText =
  statusTwo === "true" ? "Delivered" : "Pending";
//----------------------------------------------------------------------------//
document.querySelector('[data-key="order3"] > .biscuits > .count').innerText =
  biscuitsThree;
document.querySelector('[data-key="order3"] > .donuts > .count').innerText =
  donutsThree;
document.querySelector('[data-key="order3"] > .pancakes > .count').innerText =
  pancakesThree;
document.querySelector('[data-key="order3"] > .status > dd').innerText =
  statusThree === "true" ? "Delivered" : "Pending";

//---------------------...ooo000 END OF FILE 000ooo...------------------------//

/* I didn't understand the format of the initial code
  |* so I changed the format based on what we learned in IWA1 and IWA3 challenge 1
  |* therefore, I made the const's = the correct values without changing the html
  |* then used .innertext to fill in the const value into the correct place in the html
   */

/* Alternate solution

const html = {
    orders: {
        1: {
            root: document.querySelector('[data-key="order1"]'),
            biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order1"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
            status: document.querySelector('[data-key="order1"] .status dd')
        },

*/

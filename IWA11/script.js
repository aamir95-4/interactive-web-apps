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

document.querySelector('[data-key="order1"] > .biscuits > .count').innerText =
  biscuitsOne;
document.querySelector('[data-key="order1"] > .donuts > .count').innerText =
  donutsOne;
document.querySelector('[data-key="order1"] > .pancakes > .count').innerText =
  pancakesOne;
document.querySelector('[data-key="order1"] > .status > dd').innerText =
  statusOne === "true" ? "Delivered" : "Pending";

document.querySelector('[data-key="order2"] > .biscuits > .count').innerText =
  biscuitsTwo;
document.querySelector('[data-key="order2"] > .donuts > .count').innerText =
  donutsTwo;
document.querySelector('[data-key="order2"] > .pancakes > .count').innerText =
  PancakesTwo;
document.querySelector('[data-key="order2"] > .status > dd').innerText =
  statusTwo === "true" ? "Delivered" : "Pending";

document.querySelector('[data-key="order3"] > .biscuits > .count').innerText =
  biscuitsThree;
document.querySelector('[data-key="order3"] > .donuts > .count').innerText =
  donutsThree;
document.querySelector('[data-key="order3"] > .pancakes > .count').innerText =
  pancakesThree;
document.querySelector('[data-key="order3"] > .status > dd').innerText =
  statusThree === "true" ? "Delivered" : "Pending";

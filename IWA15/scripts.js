const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const first = data.lists[0][1] || {};
const second = data.lists[1][1] || {};
const third = data.lists[2][1] || {};

const result = [];

const extractBiggest = () => {
  if (
    first[first.length - 1] > second[second.length - 1] &&
    first[first.length - 1] > third[third.length - 1]
  ) {
    return first.pop();
  }
  if (second[second.length - 1] > third[third.length - 1]) {
    return second.pop();
  }
  return third.pop();
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

// Example from Riko

// const {
// 	lists: [
// 		[, first],
// 		[, second],
// 		[, third],
// 	]
// } = data

// const result = []

// const extractBiggest = () => {
//   const firstLast = first.at(-1)
// 	const secondLast = second.at(-1)
// 	const thirdLast = third.at(-1)

// 	if (firstLast > secondLast && firstLast > thirdLast) {
// 		first.pop()
// 		return firstLast
// 	}

// 	if (secondLast > thirdLast) {
// 		second.pop()
// 		return secondLast
// 	}

// 	third.pop()
// 	return thirdLast
// }

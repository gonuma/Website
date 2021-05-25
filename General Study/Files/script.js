"use strict";
// Please don't delete the 'use strict' line above

function lessThenOrEqualToFive(num) {
  return num <= 5;
}

function square(num) {
  return num * num;
}

function doTheThing(array) {
  return array.filter(lessThenOrEqualToFive).map(square);
}

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

const arrayOfObjects = [
  { name: "alice", favoriteColor: "green" },
  { name: "bob", favoriteColor: "blue" },
];

function getNames(array) {
  const result = [];
  for (const item of array) {
    result.push(item["name"]);
  }
  return result;
}

function getFavoriteColors(array) {
  const result = [];
  for (const item of array) {
    result.push(item.favoriteColor);
  }
  return result;
}

// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

// Declare a function getSwitched. This function should call .map. You may need to write a helper function, or you can use an anonymous function.

/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} a new array, with each number converted to a string, and each string converted to a number
 */

function getSwitched2(array) {
  const result = [];

  for (const item of array) {
    if (typeof item === "number") {
      result.push(item.toString());
    }
    if (typeof item === "string") {
      result.push(Number(item));
    }
  }
  return result;
}

function switcher(item) {
  if (typeof item === "number") {
    return item.toString();
  }
  if (typeof item === "string") {
    return Number(item);
  }
}

function getSwitched(array) {
  return array.map(switcher);
}

function getSwitchedAnon(array) {
  return array.map(function (item) {
    if (typeof item === "number") {
      return item.toString();
    }
    if (typeof item === "string") {
      return Number(item);
    }
  });
}

// test(getSwitchedAnon([1, 2, 3]), ["1", "2", "3"]);
// test(getSwitchedAnon(["1", "2", "3"]), [1, 2, 3]);
// test(getSwitchedAnon(["1", 2, "3"]), [1, "2", 3]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} a new array, with each number multiplied by its index in the given array
 */

// function multiplier(number) {
//   return number * ;
// }

// function multiplyByIndex(array) {
//   const result = [];

//   for (const item of array) {
//     result.push(item * array.indexOf(item));
//   }

//   console.log(result);
//   return result;
// }

function multiplier(item, index) {
  console.log(`The current iteration is ${index}, and the number is ${item}`);
  return item * index;
}

function multiplyByIndex(array) {
  console.log(array.map(multiplier));
  return array.map(multiplier);
}

// test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
// test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
// test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);

/**
 * @param {Array<any>} ???
 * @param {Function} ??? - a function to perform on the given array
 * @param {number} ??? - the number of times to perform the given function on the array
 * @returns {Array<any>} a new array, with each element run through the given function the given number of times
 */

function double(element) {
  return element * 2;
}

function feedback(array, action, repetitions) {
  let mapped = array.reduce(double);

  return mapped;
}

// test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
// test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
// test(feedback([1, 2, 3], double, 8), [256, 512, 768]);

/**
 * @param {number} ???
 * @returns {boolean} whether or not the given number is a multiple of ten
 */
// Your code here

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

function isMultipleOfTen(number) {
  return number % 10 === 0;
}

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

/**
 * @param {string} ???
 * @returns {boolean} whether or not the given string has at least one vowel (a, e, i, o, u)
 */
// Your code here

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

function hasAVowel(word) {
  for (const letter of word) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      return word;
    }
  }
}

// test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
// test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} an array of all the given numbers that are positive
 */

function getPositiveNumbers(number) {
  return number.filter((num) => {
    return num > 0;
  });
}

// test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
// test(getPositiveNumbers([-2, -4]), []);

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} an array of all the given strings that begin with a capital letter and end with a question mark
 */

function getQuestions(array) {
  return array.filter((string) => {
    for (let i = 0; i < string.length; i++) {
      if (
        string[0] === string[0].toUpperCase() &&
        string[string.length - 1] === "?"
      ) {
        return string;
      }
    }
  });
}

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
  "you don't know?",
];

// test(getQuestions(arrayOfStrings3), [
//   "What in the world?",
//   "Do you want to know a secret?",
// ]);
// test(getQuestions(arrayOfStrings3.slice(2)), ["Do you want to know a secret?"]);

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} an array of all the given strings that have an odd length and are ALL CAPS.
 */

function getOddLengthCapitalWords(array) {
  return array.filter((string) => {
    if (string === string.toUpperCase() && string.length % 2 !== 0) {
      return string;
    }
  });
}

const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

// test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
// test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

/**
 * @param {Array<any>} ???
 * @param {Array<any>} ???
 * @returns {Array<any>} an array of all the elements that are in both of the given arrays
 */

function intersection(arr1, arr2) {
  return arr1.filter((number) => {
    for (let i = 0; i < arr2.length; i++) {
      if (number === arr2[i]) {
        console.log(number);
        return number;
      }
    }
  });
}

// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);

/**
 * @param {...Array<any>} ??? - an arbitrary number of arrays
 * @returns {Array<any>} an array of all the elements that are in all of the given arrays
 */

function intersection2(...array) {
  return array.filter((number) => {
    for (let i = 0; i < array[1].length; i++) {}
  });
}

// test(intersection2([1, 2, 3], [1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection2([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3]);
// test(intersection2([1, 2, 3], [3, 4, 5], [6]), []);
// test(intersection2([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]), []);

const fridge = [];

function getItemsInRefrigerator() {
  return fridge;
}

function putItemInRefrigerator(item) {
  fridge.push(item);
}

function removeItemFromRefrigerator(item) {
  for (const food of fridge) {
    if (item === food) {
      fridge.splice(item, 1);
    }
  }
}

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

/**
 * @param {string} ???
 * @returns {string} a greeting for the given argument
 */

function getGreeting(name) {
  return `Hello, ${name}.`;
}

// test(["zeno", "yanis", "xander"].map(getGreeting), [
//   "Hello, zeno.",
//   "Hello, yanis.",
//   "Hello, xander.",
// ]);

/**
 * @param {number} ???
 * @returns {number} the absolute value of the given number
 */

function abs(num) {
  return Math.abs(num);
}

// test([1, 2, 3].map(abs), [1, 2, 3]);
// test([-1, -2, -3].map(abs), [1, 2, 3]);
// test([-1, 2, -3].map(abs), [1, 2, 3]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} a new array, with each number from the given array incremented by 1
 */

function increment(num) {
  return num + 1;
}

function getIncrementedNumbers(array) {
  return array.map(increment);
}

// test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
// test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
// test(getIncrementedNumbers(array1), [1, 1, 1]);
// // Make sure that the original array is untouched
// test(array1, [0, 0, 0]);

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} a new array, with each number multiplied by its index in the given array
 */

function multiply(num, index) {
  return num * index;
}

function multiplyByIndex(array) {
  return array.map(multiply);
}

// test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
// test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
// test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);

// -0!? JavaScript is weird.

/**
 * @param {{ [key: string]: number }} ???
 * @returns {{ [key: string]: number }} the given object, with all numbers in the object incremented by 1
 */

function incrementNumbers(object) {
  for (const item in object) {
    if (typeof object[item] === "number") {
      object[item] = object[item] + 1;
    }
  }
  return object;
}

// test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
//   a: 2,
//   b: 3,
//   1: 4,
//   d: "hello",
// });
// test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
//   a: 3,
//   b: 4,
//   1: 5,
//   d: "hello",
// });

function test1(num) {
  console.log(num);
}

// test1(5);

let test2 = (num) => console.log(num);

// test2(6);

const testArr1 = [[1], [2], [3]];

// console.log(testArr1.flat());

const pets = ["cat", "dog", "bat"];

// console.log(pets.includes("cat"));

// console.log(pets[0].includes("at"));

// console.log(pets.includes("cat", 1));

/** Declare a function 'equal'.

'equal' takes two functions as inputs: 'funcA' and 'funcB'.

'equal' returns a new function. When invoked with an input 'value', 
the returned function will assess whether the return value of 'funcA' and 'funcB' are equal 
when run with 'value'.
*/

let numTest = (number) => {
  for (const digit in number) {
    return digit;
  }
};

/**
 * @param {number} x
 * @returns {(y: number) => number} a function that takes an input y and returns the value of x divided by y
 */

function divide(x) {
  return function (y) {
    return x / y;
  };
}

const divide2 = divide(2);

// test(divide2(4), 0.5);
// test(divide(2)(1), 2);

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    } else {
      return null;
    }
  }
}

function recurTest(x) {
  if (x === 0) {
    return;
  }

  console.log(x);
  recurTest(x - 1);
}

// recurTest(5);

// function equal(funcA, funcB) {
//   return function (x) {
//     if (funcA(x) === funcB(x)) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

// function timesTwo(num) {
//   return num * 2;
// }
// function addOne(num) {
//   return num + 1;
// }

// const foo = equal(timesTwo, addOne);
// let actual = foo(4);
// let expected = false;

// if (actual === expected) {
//   console.log("Yay!");
// } else {
//   console.log("Try Again!");
// }

// actual = foo(1);
// expected = true;

// if (actual === expected) {
//   console.log("Yay!");
// } else {
//   console.log("Try Again!");
// }

function not(predicate) {
  return function (x) {
    return predicate(!x);
  };
}

function lessThan100(x) {
  return x < 100;
}

const biggerThan100 = not(lessThan100);

// let expected = biggerThan100(100);
// let actual = true;

// if (expected === actual) {
//   console.log("Yay!");
// } else {
//   console.log("Try again!");
// }

/* What is whatIsThis? */

// function foo() {
//   return function () {
//     return function () {
//       return 4;
//     };
//   };
// }

// let whatIsThis = foo()();

// function foo() {
//   return function (a) {
//     return function (b) {
//       return a + b;
//     };
//   };
// }

// let x = foo(1);
// let y = x(2);
// let z = y(3);
// console.log(z);

// function foo(a) {
//   return function (b) {
//     return function (c) {
//       let d = b + c;
//       return a(d);
//     };
//   };
// }

// function bar(n) {
//   return n * 2;
// }

// let x = foo(bar)(2);
// let y = x(3);

// console.log(y);

let method = {
  mult: function (x) {
    return x * 2;
  },
  add: function (x) {
    return x + 2;
  },
};

console.log(method.mult(2));
console.log(method.add(5));

let testy = [1, 2, 3, 4, 5, 6];

function testyTest(arr) {
  return arr.map((item) => item * 2);
}

console.log(testyTest(testy));

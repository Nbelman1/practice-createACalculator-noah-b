/* 
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
*/

// Declaring functions for possible calculations

function calcAbsValue(num) {
    return Math.abs(num);
}

function raiseToPower(base, power) {
    return Math.pow(base, power);
}

function calcSqRoot(num) {
    return Math.pow(num, 0.5);
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    return max;
}

/* Test cases for min and max functions
let arr1 = [1, 5, 4, 30];
let arr2 = [-9, -5, 1];
let arr3 = [400, 200, -100, 0];

console.log(findMax(arr1));
console.log(findMax(arr2));
console.log(findMax(arr3));
*/ 

/* TODO: function for both largest and smallest numbers 
function findBiggestAndSmallest(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.INFINITY;
    for (num in arr) {
        if (num > max) {
            max = num;
        }
    };
    for (num in)
}
*/

// TODO: function for random integer within a specified range 

// TODO: round a number to a specified number of decimals 

// TODO: function that loops everything together 


const input = require('readline-sync');

/* 
Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
1
● Round 23.67891 to 2 decimal places.
*/

// Arrays for testing
let arr1 = [1, 5, 4, 30];
let arr2 = [-9, -5, 1];
let arr3 = [400, 200, -100, 0];


// Declaring functions for user options
// TODO: add user input to each function
function calcAbsValue(num) {
    return Math.abs(num);
}

function raiseToPower(base, power) {
    return Math.pow(base, power);
}

function calcSqRoot(num) {
    return Math.pow(num, 0.5); // raising a number to 0.5 returns its square root 
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

function findMaxAndMin(arr) {
    console.log("Largest number: " + findMax(arr));
    console.log("Smallest number: " + findMin(arr));
}

function findRandomInt(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function roundToDecimals(numToRound, numDecimals) {
    let factor = createDecimalFactor(numDecimals);
    let product = Math.round(numToRound * factor);
    let result = product / factor;
    return result;
}

function createDecimalFactor(input) { // creates a number: 1 concatenated with specified number of 0's 
    let factor = "1"; // we also could raise 10 to the power of input 
    for (i = 0; i < input; i++) {
        factor += "0";
    } 
    return Number(factor); 
}

// TODO: function that runs the program
function runProgram() {
    displayOptions();
    readUserInput();
}

function displayOptions() {
    console.log("Welcome to Create a Calculator!\n");
    console.log("To perform an operation, please enter the associated number.");
    console.log("Operation              Number");
    console.log("Absolute value         1");
    console.log("Raise to power         2");
    console.log("Square root            3");
    console.log("Find max               4");
    console.log("Find min               5");
    console.log("Find max and min       6");
    console.log("Choose random number   7");
    console.log("Round number           8");
}

function readUserInput(choice) {
    let isRunning = true;
    choice = input.questionInt("Enter a number here: ");
    while (isRunning) {
        if (choice === 1) {
            calcAbsValue();
        } else if (choice === 2) {
            raiseToPower();
        } else if (choice === 3) {
            calcSqRoot();
        } else if (choice === 4) {
            findMax();
        } else if (choice === 5) {
            findMin();
        } else if (choice === 6) {
            findMaxAndMin();
        } else if (choice === 7) {
            findRandomInt();
        } else if (choice === 8) {
            roundToDecimals();
        } else if (choice < 1 || choice > 8) {
            input.questionInt("Invalid selection. Enter a number here: "); // TODO: connect to rest of while loop
        }
    }
}

runProgram();
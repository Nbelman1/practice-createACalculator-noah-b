const input = require('readline-sync');

/* 
Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12, 0.5, 27].
● Generate a random number between 1 and 50.
● Round 23.67891 to 2 decimal places.
*/

// functions for user options
function calcAbsValue() {
    console.log("Calculating absolute value...");
    let num = input.question("Enter a number: ");
        // using question instead of questionInt in case user input has decimals
    return Math.abs(Number(num));
}

function raiseToPower() {
    console.log("Raising a number to a power...");
    let base = input.questionInt("Enter a number: ");
    let power = input.questionInt("Enter a power: ");
    return Math.pow(base, power);
}

function calcSqRoot() {
    console.log("Calculating square root...");
    let num = input.questionInt("Enter a number: ");
    return Math.pow(num, 0.5); // raising a number to 0.5 returns its square root 
}

// helper function for findMin() and findMax()
function convertInputToNums() { // gets user input, returns array of numbers
    let userInput = input.question("Enter a series of numbers separated by spaces: ");
    let arrOfStrings = userInput.split(' '); 
    let arrOfNumbers = [];

    for (let i = 0; i < arrOfStrings.length; i++) { 
        arrOfNumbers.push(Number(arrOfStrings[i]));
    }

    return arrOfNumbers;
}

function findMin() {
    console.log("Finding the smallest number...");
    let arr = convertInputToNums(); // gets user input, returns array of numbers
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax() {
    console.log("Finding the largest number...");
    let arr = convertInputToNums(); // gets user input, returns array of numbers
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findRandomInt() {
    console.log("Generating random number...");
    let startNum = input.questionInt("Enter beginning of range: ");
    let endNum = input.questionInt("Enter end of range: ");
    let arr = createRangeOfNumbers(startNum, endNum); // returns array of numbers
    let index = Math.floor(Math.random() * arr.length); // returns randomized index
    return arr[index];
}

// helper function for findRandomInt()
function createRangeOfNumbers(startNum, endNum) {
    let arr = [];
    for (let i = startNum; i <= endNum; i++) {
        arr.push(i);
    }
    return arr;
}

function roundToDecimals() {
    console.log("Rounding a number to a number of decimals...")
    let numToRound = input.question("Enter the number to round: "); 
        // we can't use questionInt because the result has decimals
    let numOfDecimals = input.questionInt("Enter how many digits come after the decimal: ");
    let factor = Math.pow(10, numOfDecimals);
    let product = Number(numToRound) * factor;
    let result = (Math.round(product)) / factor;
    return result;
}

// function that runs the program
function runProgram() {
    displayOptions();
    readUserInput();
}

function displayOptions() {
    console.log("Welcome to Create a Calculator!\n");
    console.log("To perform an operation, please enter the associated number.\n");
    console.log("OPERATION              NUMBER");
    console.log("Absolute value             1");
    console.log("Raise to power             2");
    console.log("Square root                3");
    console.log("Find max                   4");
    console.log("Find min                   5");
    console.log("Generate random number     6");
    console.log("Round number               7");
    console.log("Exit program               8");
}

function readUserInput(choice) {
    let isRunning = true;
    while (isRunning) {
        choice = input.questionInt("Select an option: ");
        if (choice === 1) {
            console.log(calcAbsValue());
        } else if (choice === 2) {
            console.log(raiseToPower());
        } else if (choice === 3) {
            console.log(calcSqRoot());
        } else if (choice === 4) {
            console.log(findMax());
        } else if (choice === 5) {
            console.log(findMin());
        } else if (choice === 6) {
            console.log(findRandomInt());
        } else if (choice === 7) {
            console.log(roundToDecimals());
        } else if (choice === 8) {
            isRunning = false;
        } else if (choice < 1 || choice > 8) {
            console.log("Invalid selection, try again."); 
        }
    }
    console.log("Exiting program...");
}

// call function to run program
runProgram();
const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const num1 = Number(await input("Enter num1: "));
    const num2 = Number(await input("Enter num2: "));
    console.log(`Difference between two numbers is: ${num1 - num2}`);

}

main()

// Calculate the difference between two numbers.
// Input: 10, 4

// Output: 6

// Input: 7, 15

// Output: -8


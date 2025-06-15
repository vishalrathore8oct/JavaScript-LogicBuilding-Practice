const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const num1 = Number(await input("Enter num1: "));
    const num2 = Number(await input("Enter num2: "));
    console.log(`Sum of two numbers is: ${num1 + num2}`);

}

main()

// Calculate the sum of two numbers.
// Input: 5, 10

// Output: 15

// Input: -3, 8

// Output: 5


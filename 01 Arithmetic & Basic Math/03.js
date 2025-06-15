const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const num1 = Number(await input("Enter num1: "));
    const num2 = Number(await input("Enter num2: "));
    console.log(`Multiply of two numbers is: ${num1 * num2}`);

}

main()

// Multiply two numbers.
// Input: 3, 4

// Output: 12

// Input: -2, 6

// Output: -12


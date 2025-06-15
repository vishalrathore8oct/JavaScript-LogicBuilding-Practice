const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const num1 = Number(await input("Enter num1: "));
    const num2 = Number(await input("Enter num2: "));

    if (num2 === 0) {
        console.log(`${num1 / num2} Cannot divide by zero`);
    } else {
        console.log(`Divide of two numbers is: ${num1 / num2}`);
    }

}

main()

// Divide two numbers and handle division by zero.
// Input: 10, 2

// Output: 5.0

// Input: 7, 0

// Output: Cannot divide by zero


const input = require("../readlineInput.js");

async function main() {
    const number = Number(await input("Enter a number: "));
    console.log(`Square root = ${Math.sqrt(number)}`);
}

main();


// Calculate the square root of a number.

// Input: 16
// Output: Square root = 4.00

// Input: 20
// Output: Square root = 4.47

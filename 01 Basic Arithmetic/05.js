const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const base = Number(await input("Enter base (x): "));
    const exponent = Number(await input("Enter exponent (y): "));
    console.log(`Result of ${base}^${exponent} is: ${base ** exponent}`);
    
    
}

main()

// Calculate the power of a number (e.g., x^y).
// Input: 2^3

// Output: 8

// Input: 5^0

// Output: 1
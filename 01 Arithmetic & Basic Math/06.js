const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const rupees = Number(await input("Enter amount in INR: "));
    console.log(`Your amount in USD: ${rupees * 0.012}`);
    
}

main()

// Input currency in rupees and output in USD.
// Assume 1 INR = 0.012 USD

// Input: 1000
// Output: Equivalent amount in USD: 12

// Input: 500
// Output: Equivalent amount in USD: 6
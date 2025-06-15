const input = require("../readlineInput.js")

async function main() {
    // Start Writing Your Code Below
    const celsius = Number(await input("Enter temperature in Celsius: "));
    console.log(`Your Temperature in Fahrenheit is: ${(celsius * (9/5) + 32)}`);
    
}

main()

// Convert temperature from Celsius to Fahrenheit.

// Input: Celsius = 25

// Output: Fahrenheit = 77.0

// Input: Celsius = 37.0

// Output: Fahrenheit = 98.6

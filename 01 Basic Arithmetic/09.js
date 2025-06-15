const input = require("../readlineInput.js");

async function main() {
    const length = Number(await input("Enter rectangle length: "));
    const width = Number(await input("Enter rectangle width: "));
    const radius = Number(await input("Enter circle radius: "));

    const rectanglePerimeter = 2 * (length + width);
    const circlePerimeter = 2 * 3.14 * radius; 

    console.log(`Perimeter of rectangle = ${rectanglePerimeter}`);
    console.log(`Perimeter of circle = ${circlePerimeter}`);
}

main();


// Calculate the perimeter of a rectangle and circle.

// Input: 
// Enter rectangle length: 4
// Enter rectangle width: 2
// Enter circle radius: 3

// Output: 
// Perimeter of rectangle = 12
// Perimeter of circle = 18.84

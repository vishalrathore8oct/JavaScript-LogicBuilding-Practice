const input = require("../readlineInput.js");

async function main() {
    const rectLength = Number(await input("Enter rectangle length: "));
    const rectWidth = Number(await input("Enter rectangle width: "));
    const rectArea = rectLength * rectWidth;

    const radius = Number(await input("Enter circle radius: "));
    const circleArea = 3.14 * radius * radius;

    const base = Number(await input("Enter triangle base: "));
    const height = Number(await input("Enter triangle height: "));
    const triangleArea = 0.5 * base * height;

    console.log(`Area of rectangle = ${rectArea}`);
    console.log(`Area of circle = ${circleArea}`);
    console.log(`Area of triangle = ${triangleArea}`);
}

main();


// Find the area of a rectangle, circle, and triangle.

// Rectangle Input: 
// Enter rectangle length: 5
// Enter rectangle width: 3
// Output: Area of rectangle = 15

// Circle Input: 
// Enter circle radius: 4
// Output: Area of circle = 50.24

// Triangle Input: 
// Enter triangle base: 6
// Enter triangle height: 4
// Output: Area of triangle = 12

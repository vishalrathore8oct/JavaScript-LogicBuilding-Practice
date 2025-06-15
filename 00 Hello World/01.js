const input = require("../readlineInput.js")

async function main() {
    const nameOfUser = await input("Enter Your Name: ")
    console.log(`Hello World ${nameOfUser} Ji`);
    
}

main()
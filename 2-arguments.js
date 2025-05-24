// A script that prints a message depending of the number of arguments passed

const codeArguments = process.argv;
const sizeOfArguments = codeArguments.length;

if (sizeOfArguments <= 2) {
    console.log("No argument");
} else if (sizeOfArguments === 3) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

// A script that prints the first argument passed to it

const processArguments = process.argv;
const firstArgument = processArguments[2];
const sizeOfArguments = processArguments.length;

if (sizeOfArguments <= 2) {
  console.log("No argument");
} else {
  console.log(firstArgument);
}

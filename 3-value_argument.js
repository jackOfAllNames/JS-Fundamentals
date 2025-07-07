// A script that prints the first argument passed to it

const processArguments = process.argv;
const firstArgument = processArguments[2];

if (firstArgument) {
  console.log(firstArgument);
} else {
  console.log("No argument");
}

// A script that prints 
//      My number: <first argument converted in integer> 
// if the first argument can be converted to an integer
const firstArgument = process.argv[2];
const convertedFirstArgument = parseInt(firstArgument)

if (!convertedFirstArgument) {
    console.log("Not a number")
} else {
    console.log("My number: " + convertedFirstArgument)
}

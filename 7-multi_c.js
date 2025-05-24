const firstArgument = process.argv[2];
const convertedFirstArgument = parseInt(firstArgument);

if (!convertedFirstArgument) {
    console.log("Missing number of occurrences")
} else {
    for (let i = 0; i < convertedFirstArgument; i++) {
        console.log("C is fun");
    }
}
const firstArgument = process.argv[2];
const convertedFirstArgument = parseInt(firstArgument);

if (!convertedFirstArgument) {
  console.log("Missing size");
} else {
  for (let i = 0; i < convertedFirstArgument; i++) {
    let square = "";
    for (let j = 0; j < convertedFirstArgument; j++) {
      square += "X";
    }
    console.log(square);
  }
}

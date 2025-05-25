// A script that computes and prints a factorial
const firstArgument = parseInt(process.argv[2]);

function findFactorial(num) {
  if (num === 0 || !num) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}

const valueOfFactorial = findFactorial(firstArgument);
console.log(valueOfFactorial);

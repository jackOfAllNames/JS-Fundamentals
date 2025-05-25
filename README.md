# JS-Fundamentals

Welcome to **JS-Fundamentals** – a collection of beginner-friendly JavaScript scripts designed to strengthen your core programming skills. Each script tackles a specific task, helping you get comfortable with syntax, control structures, and handling input from the command line.

## Getting Started

Make sure you have **Node.js** installed. You can run any script on your terminal using:

```bash
node <filename> <arg1> <arg2> ...
```

For example:

```bash
node 0-javascript_is_amazing.js
```

## Tasks Overview

### 0. First constant, first print

Prints:

`JavaScript is amazing`

- Uses a constant variable `myVar`
- No use of `var`

📄 `0-javascript_is_amazing.js`

### 1. 3 languages

Prints three lines:

```javascript
C is fun
Python is cool
JavaScript is amazing
```

📄 `1-multi_languages.js`

### 2. Arguments

Prints different messages based on the number of arguments:

- No argument - `No argument`
- One argument - `Argument found`
- More than one - `Arguments found`

📄 `2-arguments.js`

### 3. Value of my argument

Prints the first argument passed:

```javascript
<arg1>
```

No arguments - `No argument`

📄 `3-value_argument.js`

### 4. Create a sentence

### 5. An Integer

### 6. Loop to languages

### 7. I love C

### 8. Square

### 9. Add

### 10. Factorial

Computes and prints the factorial of a number (using recursion):

```javascript
$ node 10-factorial.js
1

$ node 10-factorial.js 3
6

$ node 10-factorial.js 89
1.6507955160908452e+136

$ node 10-factorial.js 333
Infinity
```

- Argument must be an integer (or converted to one)
- Factorial of `NaN` => `1`
- Uses a recursive function

### Notes

- All scripts use `const` or `let` (never `var`)
- Outputs are handled via `console.log(...)`
- Input arguments are read using `process.argv`

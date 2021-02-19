// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11

const math = (toDo, num1, num2) => {
    return eval(num1+toDo+num2)
}

console.log(math("+", 10, 12), (10 + 12))
console.log(math("*", 10, 12), (10 * 12))
console.log(math("/", 10, 12), (10 / 12))
console.log(math("-", 10, 12), (10 - 12))
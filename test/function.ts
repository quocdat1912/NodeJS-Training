// Declare a function
function functionWithName() {
    console.log('This is a function with name')
}
functionWithName();

const variableFunc = () => {
    console.log('This is a closure function')
}
variableFunc();
// We also can assign named function to a variable
const newVariable = functionWithName
newVariable();

// Return value
// We can create returned function like this
function getSum(a: number, b: number) {
    return a + b;
}
console.log(getSum(1,2)) // log: 3

// We also can specify a return value
function getTotal(a: number, b: number): number {
    return a + b;
    // return "123123" -> Error.
}

// Function can pass like agrument.
function passFunction(fn: () => void) {
    console.log(fn());
}
passFunction(functionWithName)
passFunction(variableFunc)

// Generic Functions
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
const s = firstElement(["a", "b", "c"]); // s is of type 'string'
const n = firstElement([1, 2, 3]); // n is of type 'number'

// By adding a type parameter `T` to this function and using it in two places,
// we’ve created a link between the input of the function (the array) and the output (the return value).

// Generic type with constraint.
function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("Counter strike", "Terrious");
const notOK = longest(10, 100); // Error because number dont have property length.

// Function with Optional and Defaut Parameters
function printValueOf(x?: number) { // add ? after param to define optional.
    console.log(x)
}
printValueOf() // => undefined
printValueOf(2)// => 2


function numberFingerInHands(finger: number = 10) { // Assign a value to param mark it is default value.
    console.log(finger)
}
numberFingerInHands() // => 10
numberFingerInHands(5)// => 5

// Parameter Destructuring
function sum({ a, b, c }) {
    console.log(a + b + c);
  }
  sum({ a: 10, b: 3, c: 9 });


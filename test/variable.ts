/// Const 
const pi = 3.14 // ~> Declare an variable with `const` will can not modify and redeclare again. Uncomment below line to see error.
//pi = 2;

/// Var 
var sayHello = "Hello"
sayHello = "Hi"
var sayHello = "Hello hi"
console.log(sayHello); // ~>Declare an variable with `var` will can modify and redeclare again. "This is new message" will be log in console.

/// Let
let slogan = "Hiphop never die"
slogan = "Yeu hulk never sai" // ~>Declare an variable with `let` will can modify but can't redeclare again. Uncomment below line to see error.
//let slogan = "Rush B"


/// DATA TYPES
let boolean = true
console.log(typeof boolean) // Boolean type

let num = 123.2
console.log(typeof num) // Number type

let string = "String"
console.log(typeof string) // String type

let array = ["1", "2", "3"]
console.log(typeof array) // Object type

let any;
console.log(typeof any) // undefined type
any = 4
console.log(typeof any) // Number type
any = "Hello"
console.log(typeof any) // String type

console.log(any)
let tuple: [String, number] = ["Dat", 23] // Tuple type
console.log(`Name is ${tuple[0]}, age is ${tuple[1]}`)

/// VARIABLE SCOPE

// Global scope can access any block.
let GlobalVar = 100

function printGlobaleScope() {
    console.log(GlobalVar)
}

// Function Scope. Variable defined inside the function can be accessed from anywhere 
//inside the function including the nested function or code block. Examples: 
function someFunction() {
    let fnVar = 10
    console.log(fnVar) //can be accessed here
    if (true) {
        console.log(fnVar) //can be accessed here
    }
    function nested() {
        console.log(fnVar) //can be accessed here
    }
}

function ortherFunction() {
    console.log(fnVar) //cannot be accessed here
}
//* Note `var` supports only global & function scope. So if you define a variable inside 
//a code block, it is scoped to enclosing function and not to the code block. Examples: 
function someVarFunction() {
    if (true) {
        var localVar = 1000
        console.log(localVar)    //ok
    }
    console.log(localVar)      //ok
}
console.log(localVar)  //cannot be accessed here

//Local scope 
function someLocalFunction() {
    if (true) {
        let localVar = 1000
        console.log(localVar)      //ok
    }
    console.log(localVar)        //Error

    function nested() {
        console.log(localVar)      //Error
    }
}

// Condition if else.
// Check assign in condition statement 
var value;
function getValue(a: any) {
    return a;
}

if(value = getValue(false)) { 
    console.log(true)
} else {
    console.log(false)
}
// Pass to getValue functions these value: "string", true, false, 123, undefined, null.
// Console will log: true, true, false, true, false, fasle.

/// In javascript we use `==` to compare values and `===` to compare values and types. 
/// There's no sense to use === in TypeScript to imitate an equality check.
if(num == any) { 
    console.log(true)
} else {
    console.log(false)
}

//* We can use short syntax to assign value like this:
string = num == any ? "Right!" : undefined;










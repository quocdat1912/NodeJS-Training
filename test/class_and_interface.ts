// Declare a class
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
let point = new Point(123, 123)
console.log(`x: ${point.x}  y: ${point.y}`)

// Read only property
class Person {
    readonly name: String; // with `readonly` you can not change value after it is assigned from constructor.
    age: number;

    constructor(name: String, age: number) {
        this.name = name
        this.age = age
    }

    changeName() {
        this.name = "1234"; // Error 
    }
}

let person = new Person("Dat", 25);
person.name = "4321" // Error

//Constructors
class PointA {
    x: number;
    y: number;

    // Normal signature with defaults
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class PointB {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
    }
}

//Super Calls
class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        super();  //'super' must be called before accessing 'this' in the constructor of a derived class.
        console.log(this.k);


    }
}

//Getters / Setters
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

// Class Heritage

//1, implements Clauses

interface Bird {
    fly(): void;
}

class Duck implements Bird {
    fly(): void {
        console.log("Cant fly!");
    }
}

//2, extends Clauses
class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

// Note: It’s important to understand that an `implements` clause is only a check that the class can be treated as the interface type. 
// It doesn’t change the type of the class or its methods at all but `extends` can, a derived class has all the properties and methods 
// of its base class, and also define additional properties.

//Generic Classes
class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}

const b = new Box("hello!");
b.contents


// `this` at Runtime in Classes
//It’s important to remember that TypeScript doesn’t change the runtime behavior of JavaScript. 
//In this example, because the function was called through the obj reference, its value of this was obj rather than the class instance.
class MyClass {
    name = "MyClass";
    getName() {
        return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
};

// Prints "obj", not "MyClass"
console.log(obj.getName());

// abstract Classes and Members
abstract class BaseAbstract {
    abstract getName(): string;
    printName() {
        console.log("Hello, " + this.getName());
    }
}

class DerivedAbstract extends BaseAbstract {
    getName() {
        return "world";
    }
}

const e = new DerivedAbstract();
e.printName();


// Relationships Between Classes
// In most cases, classes in TypeScript are compared structurally, the same as other types
class Point1 {
    x = 0;
    y = 0;
}

class Point2 {
    x = 0;
    y = 0;
}

// OK
const p: Point1 = new Point2();

//--------------------------------

/// Interface 
//An interface is a syntactical contract that an entity should conform to. In other words, 
//an interface defines the syntax that any entity must adhere to.
interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)

 // There is examples about Multiple Interface Inheritance.
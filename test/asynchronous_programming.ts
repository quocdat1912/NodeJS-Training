/// Asynchronous programming

// The async keyword
// Using `async` keyword to declare an asynchronous function. Example:

function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}

async function countDownt(num: number) { //With async function it will auto convert returned type to Promise.
    for (let i = 0; i < this.counter; i++) {
        await delay(1000);
        this.counter = this.counter - 1;
        console.log(this.counter);
    }
}

countDownt(10).then(() => console.log('Count done'));

// The `await` keyword
// await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, 
// then return the resulting value.
// - Let's see an example above. We can see the `await` keyword is front of calling `delay` function (Promise). 
// It block computer excute next code until `delay` function was return.


// Using callback to handle asynchronous

function waitFor(second: number, handler: () => void) {
    setTimeout(handler, second * 1000);
}

const goodMorning = function () {
    waitFor(1, () => {
        console.log("Wake up");
        waitFor(5, () => {
            console.log("Do exercise");
            waitFor(5, () => {
                console.log("Brush teeth");
                waitFor(5, () => {
                    console.log("Clothes on");
                    waitFor(5, () => {
                        console.log("Go to work");
                    })
                })
            })
        })
    })
}
goodMorning()



// Note:
// The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions 
// within functions within functions, and it starts to get really hard to read the code. 
// So in this situation Promises came to handle the nested callback in a better way.


// Promise
const myFirstPromise = new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
        setTimeout(function () {
            resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {
        reject('Promise is rejected!');
    }
});

const helloPromise = function () {
    return new Promise(function (resolve, reject) {
        const message = `Hi, How are you!`;

        resolve(message)
    });
}
const demoPromise = function () {

    myFirstPromise
        .then(helloPromise)
        .then((successMsg) => {
            console.log("Success:" + successMsg);
        })
        .catch((errorMsg) => {
            console.log("Error:" + errorMsg);
        })
}
demoPromise();
// Note: We can define a function to receive/handle data from multi Promise. 
// This can resolve 'call back hell' by calling `then` consecutively, it also make easier to read code.

///  Awaiting a Promise.all()
// Some time you need to wait some Promise function done together, use Promise.all(). Examples: 

async function fetchUrl(urls: string[]) {
    let result = await Promise.all([urls.map((e) => fetch(e))]);
    return result;
}

fetchUrl([
    "https://git.amela.vn/",
    "https://facebook.com/",
    "https://google.com/"
])
    .then((r) => console.log(r)) // Print 
    .catch((e) => console.log(`Error: ${e}`)) // Error handling 




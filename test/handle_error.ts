// Handle error in type script

/// Try/catch handler
function checkNumber(value: any) {
    if (typeof value === 'number')
        return value;
    else {
        throw Error("Not a number")
    }
}

try {
    let result = checkNumber('asd')
    console.log(`success ${result}`)
}
catch (err) {
    console.log(err) // Log: Not a number
}

// Problems with this approach: 
// 1, Every function can throw error, but we dont know exactly which function can throw error until we check code has 'throw'
// 2, Unexpected errors can run a long way until they meet a try/catch block. In fact, they can crash your application.
// 3, Errors are side effects. They are not part of the return value of your function and they can affect things outside the function that throws the error


/// Error with returned multi type
function getAge(): Error | number {
    try {
        return checkNumber("asb")
    } catch (err) {
        return err
    }
}

const age = getAge()
if (age instanceof Error) {
    console.log(age.message)
} else {
    console.log(age)
}
// With this simple approach, we have solved the problem
// 1, We know that the function can error by looking at its return types.
// 2, We are forced to handle this error or return it. It is more explicit.
// 3, We got rid of the side effects. 

/// A comparison with Promise.
// Promise is also a container, but instead of representing the notion of
// containing one of two possible values, error and success, it represents a future value.

function getUrl(url: any): Promise<String> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof url === 'string')
                resolve(url)
            else
                reject('It is not url')
        }, 2000);
    })
}

getUrl(1234).then((value) => console.log(value)).catch((error) => console.log(error))// => log: It is not url
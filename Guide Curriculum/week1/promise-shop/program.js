///////////task no.1/////////
// setTimeout(function () {
//     console.log('');
// }, 300);

require('es6-promise');

/*task no.2
Create a promise.Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300 ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.*/

var promise = new Promise(function (fulfill, reject) {
    // After the timeout reaches 300ms, reject the promise with an `Error` object
    // with parameter `"REJECTED!"`.

    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
});

// Create a function to print `error.message` using `console.log`.

function onReject(error) {
    console.log(error.message);
}

// Pass this function as a rejection handler to the `then` method of the
// promise (the second parameter).

promise.then(null, onReject);
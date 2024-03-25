function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

// delay(1000)
//     .then(() => delay(1000))
//     .then(() => delay(1000))

async function fn() {
    await delay(1000);
    console.log(1);
    await delay(2000);
    console.log(2);
    await delay(3000);
    console.log(3);
}

console.log('до fn');
fn();
console.log('после fn');
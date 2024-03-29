function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Math.random());
        }, ms);                 
    })
}

// delay(1000)
//     .then(() => delay(1000))
//     .then(() => delay(1000))

// async function fn() {
//     console.log('до');
//     await delay(1000);
//     console.log(1);
//     await delay(1000);
//     console.log(2);
//     await delay(1000);
//     console.log('после');
// }

// console.log('до fn');
// fn();
// console.log('после fn');

// delay(1000)
//     .then(() => {
//         console.log('до');
//         return delay(1000)
//     })
//     .then(() => {
//         console.log('1');
//         return delay(1000)
//     })
//     .then(() => {
//         console.log('2');
//         return delay(1000)
//     })
//     .then(() => {
//         console.log('после');
//     })

async function fn() {
    try {
        let r1 = await delay(1000);
        let r2 = await delay(1000);
        let r3 = await delay(1000);
        console.log(r1);
        console.log(r2);
        console.log(r3);
    } catch (error) {
        console.log(error);
    }
}

fn();
//  Synchronous Code
// console.log('Step 1')
// console.log('Step 2')
// console.log('Step 3')

// // Asynchronous Code
// console.log('start')
// setTimeout(() => {
//     console.log('Finished after 2 seconds')
// }, 2000)

// console.log('end')

// Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     let success = true

//     if (success) {
//         resolve('Data loaded')
//     } else {
//         reject('Error loading data')
//     }
// })

// Using a Promise
// myPromise
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Chaining Promises

// const task = new Promise((resolve) => {
//     resolve(10)
// })

// task.then((num) => {
//     console.log(num)
//     return num * 2
// }).then((newNum) => {
//     console.log(newNum)
// })

// Async/Await

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data received')
//         }, 2000)
//     })
// }

async function getData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const jsonresponse = await data.json()
        console.log(jsonresponse)
    } catch (error) {
        console.log(error)
    }
}

getData()

// const list = [1, 2, 3]
// // let l1 = list[0]
// // let l2 = list[1]

// const [l1, l2] = list

// console.log(l1)
// console.log(l2)

aone = [1, 2]
btwo = [...aone, 3, 4]

console.log(btwo)

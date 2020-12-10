const axios = require("axios");


async function main() {
    await axios.get('https://run.mocky.io/v3/4c4eb166-7c7a-4714-9b1f-be006984251b')
        .then((res) => {
            console.log(res.data)
        })
        .catch((rej) => {
            console.log(rej)
        })

    await axios.get('https://run.mocky.io/v3/2d10d997-3825-48c3-a5ac-f1cf128f1e98')
        .then((res) => console.log(res.data))

    await axios.get('https://run.mocky.io/v3/fc264e85-84a4-44d4-934e-faa0b5261c98')
        .then((res) => {
            console.log(res.data.filter(elem => elem % 2 === 0))
            console.log(res.data.reduce((sum, elem) => elem + sum, 0))
            let result = []
            for (let arr of res.data) {
                if (arr % 2 !== 0) result.push(arr)
            }
            console.log(result)
        })
    try {
        const res = await axios.get('https://run.mocky.io/v3/fc264e85-84a4-44d4-934e-faa0b5261c98')
        const arr = res.data;
        for (let ar of arr) {
            if (ar % 2 === 0) console.log(ar)
        }
    } catch (err) {
        console.log(err)
    }







    axios.get('https://run.mocky.io/v3/d452fc30-6e0b-440a-bd8f-064d83899e84')
        .then((res) => {
            console.log(res.data)
            axios.get(res.data)
                .then((res) => {
                    console.log(res.data)
                    axios.get(res.data)
                        .then((res) => {
                            console.log(res.data)
                            axios.get(res.data)
                                .then((res) => {
                                    axios.get(res.data)
                                })
                                .catch((rej) => null)
                        })
                        .catch((rej) => console.log(rej.data))
                })
                .catch(rej => console.log(rej.data))
        })
        .catch((rej) => console.log(rej.data))


}

main();
// const fs = require("fs");

// function logAndLor(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }
// logAndLor("sonter.txt")
//     .then((data) => {
//         console.log(data);
//         console.log("THEN");
//     })
//     .catch((err) => {
//         console.log(err);
//         console.log("CATCH");
//     });
// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => {
//             console.log("C");
//             setTimeout(() => {
//                 console.log("D");
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function logAndLor(alphabet, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(alphabet);
//             resolve();
//         }, time)
//     });
// }

// logAndLor("A", 1000)
//     .then(() => {
//         return logAndLor("B", 1000);
//     })
//     .then(() => {
//         return logAndLor("C", 1000);
//     })
//     .then(() => {
//         return logAndLor("D", 1000);
//     })
//     .then(() => {
//         return logAndLor("E", 1000);
//     })
//     .then(() => {
//         return logAndLor("F", 1000);
//     });

// async function runCode() {
//     await logAndLor("A", 1000);
//     await logAndLor("B", 1000);
//     await logAndLor("C", 1000);
//     await logAndLor("D", 1000);
//     await logAndLor("E", 1000);
// }
// runCode()
function readCode(alphabet, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(alphabet);
            resolve();
        }, time)
    })
}
async function runCode() {
    await readCode('a', 1000)
    await readCode('b', 1000)
    await readCode('c', 1000)
    await readCode('d', 1000)
}
runCode()
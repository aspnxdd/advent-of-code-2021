import fs from 'fs';

fs.readFile("day1_input.txt", "utf8", (err, data) => {

    const input = data.split("\n").map(i => Number(i))

    let tripleInput = []
    let counter = 0;
    input.forEach((i, ind) => {
        if (ind === 0 | ind === 1) return
        const res = i + input[ind - 1] + input[ind - 2]
        tripleInput.push(res)
    })

    tripleInput.map((e, ind) => {
        if (ind === 0) return
        if (e > tripleInput[ind - 1]) counter++;
    })
    console.log(counter)


})



import fs from 'fs';

fs.readFile("day1_input.txt", "utf8", (err, data) => {

    let counter = 0;
    const input = data.split("\n").map(i => Number(i))

    input.map((e, ind) => {
        if (ind === 0) return
        if (e > input[ind - 1]) counter++;
    })
    console.log(counter)
})


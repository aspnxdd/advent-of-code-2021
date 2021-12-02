import fs from 'fs';

fs.readFile("input.txt", "utf8", (err, data) => {

    let x = 0;
    let depth=0;
    let aim = 0;
    const input = data.split("\n")
   
    input.forEach(e => {
        const [key, value] = e.split(" ");
        if (key === "forward") {x += Number(value); depth+=(aim*Number(value))}
        if (key === "up") aim -= Number(value)
        if (key === "down") aim += Number(value)
    });
    console.log(x, depth);
    console.log(Math.abs(x*depth))

})
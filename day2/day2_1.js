import fs from 'fs';

fs.readFile("input.txt", "utf8", (err, data) => {

    let x = 0;
    let depth = 0;
    
    const input = data.split("\n")
   

    input.forEach(e => {
        const [key, value] = e.split(" ");
        if (key === "forward") x += Number(value)
        if (key === "up") depth += Number(value)
        if (key === "down") depth -= Number(value)
    });
    console.log(x, depth);
    console.log(Math.abs(x*depth))

})
import fs from 'fs';

fs.readFile("input.txt", "utf8", (err, data) => {

    const input = data.split("\n").filter(e => e!="")
    let gamma = []
    let epsillon = []

    for (let char = 0; char < input[0].length-1; char++) {
        let ones = 0;
        let zeros = 0;
        for (let line = 0; line < input.length-1; line++) {
            if (input[line][char] == 1) ones += 1
            if (input[line][char] == 0) zeros += 1
        }
        if (ones > zeros) {
            gamma.push(1);
            epsillon.push(0)
        }
        if (ones < zeros) {
            gamma.push(0);
            epsillon.push(1)
        }
    }
    const gammaSum = gamma.reduce((sum, item) => {
        return String(sum + item)
    }, 0)

    const epsilonSum = epsillon.reduce((sum, item) => {
        return String(sum + item)
    }, 0)
    
    console.log(parseInt(epsilonSum, 2) * parseInt(gammaSum, 2))
})
import fs from 'fs';

fs.readFile("input.txt", "utf8", (err, data) => {

    const input = data.split("\n")
    
    function findBits(mostCommon) {
        const oneCommon = {
            "oneMostCommon": 1,
            "zeroMostCommon": 0
        }
        const zeroCommon = {
            "oneMostCommon": 0,
            "zeroMostCommon": 1
        }
        let copy = [...input]

        return new Promise((res, rej) => {
            for (let char = 0; char < input[0].length ; char++) {
                let ones = 0;
                let zeros = 0;
                
                for (let line = 0; line < copy.length ; line++) {
                    if (copy[line][char] == 1) ones += 1
                    if (copy[line][char] == 0) zeros += 1
                }
                
                if (ones > zeros) {
                    copy = copy.filter((e) => e.startsWith(oneCommon[mostCommon],char))
                }
                if (ones < zeros) {
                    copy = copy.filter((e) => e.startsWith(zeroCommon[mostCommon],char))
                }
                if (ones == zeros) {
                    copy = copy.filter((e) => e.startsWith(oneCommon[mostCommon],char))
                }
                
                if (copy.length == 1) res(copy)
                if (copy.length == 0) rej("error")
            }
        })
    }

    async function getLifeSupportRating() {
        try {
            const oxygen = parseInt(await findBits("oneMostCommon"),2)
            const co2 = parseInt(await findBits("zeroMostCommon"),2)
            console.log("res",oxygen*co2)
        } catch (err) {
            console.error(err)
        }
    }

    getLifeSupportRating()
})
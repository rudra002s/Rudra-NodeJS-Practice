const fs = require("fs")

console.log("starting")

//fs.writeFileSync("rudra.txt","Rudra is smart")
//it waits until the file is written

fs.writeFile("rudra2.txt","Rudra is getting smarter each day",()=>{
    console.log("done")
})
console.log("ending")
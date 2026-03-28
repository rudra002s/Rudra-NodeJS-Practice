const fs = require("fs")

console.log("starting")

//fs.writeFileSync("rudra.txt","Rudra is smart")
//it waits until the file is written

fs.writeFile("rudra2.txt","Rudra is getting smarter each day, he is working hard",()=>{
    console.log("done")
//first starting will print then ending and at last done because writeFile works Asynchronously and takes its own time to create the file and will always work as in async fn
fs.readFile("rudra2.txt",(error,data)=>{
    console.log(error,data.toString())
    //it will display error in this case as null and then it will show buffer which our data and in order to see the data we use data.toString to see the data inside file
})
}) 

fs,fs.appendFile("rudra2.txt",", Ritu is also working hard",(e,d)=>{
    console.log(d)
})
console.log("ending")
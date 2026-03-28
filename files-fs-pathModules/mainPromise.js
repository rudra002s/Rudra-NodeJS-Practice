//for this we have first set out type from common js to modules in package.json
import fs from "fs/promises"

let a= await fs.readFile("rudra2.txt")
//let b=await fs.writeFile("rudra2.txt", "this is a very good promise") //it changed the old content to a new one
//to add this we can rather use append feature
let b=await fs.appendFile("rudra2.txt", ",this is a very good promise")
console.log(a.toString())
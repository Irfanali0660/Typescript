import PromptSync from "prompt-sync";
let prompt=PromptSync()

console.log("ENTER THE MARKS SCORED BY THE STUDTENT");

let written:number=Number(prompt('Enter The Mark'))
let Lab:number=Number(prompt('Enter The Lab mark'))
let Assignment:number=Number(prompt('Enter The Assignment Mark'))

let Grade:number=(written*70)/100+(Lab*20)/100+(Assignment*10)/100

console.log(`Ansewer = ${written}*70)/100+(${Lab}*20)/100+(${Assignment}*10)/100 Grade of the student is ${Grade}`);




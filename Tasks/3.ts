import promptSync from "prompt-sync";
let prompt= promptSync()

let P:number = Number(prompt("Enter the Principal amount : "))
let R:number = Number(prompt("Enter the Interst Rate : "))
let n:number = Number(prompt("Enter the Number of Year : "))
let SI:number=((P*R*n)/100)
console.log(`Simple Interes is ${SI}`);

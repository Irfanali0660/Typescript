
import promptSync from 'prompt-sync';
const prompt=promptSync()
let number1:number = Number(prompt("Enter the numbers : "))
let number2:number = Number(prompt("Enter the number : "))
let sum:number=number1+number2;
console.log(`answer is ${sum}`);

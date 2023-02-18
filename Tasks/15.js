"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
// let limit:number=Number(prompt("Enter the limit: ")) 
// let arr:number[]= [];
// getArray();
// function getArray():void{
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Number(prompt(i+") "))
//     }
// }
// displayArray()
// console.log("Result: ");
// function displayArray():void{
//     for (let i = 0; i < limit; i++) {
//         console.log(arr[i]);
//     }
// }
let limit = Number(prompt("ENTER"));
let arr = [];
getArray();
function getArray() {
    console.log("VALUES");
    for (let i = 0; i < limit; i++) {
        arr[i] = Number(prompt(""));
    }
}
display();
function display() {
    for (let i = 0; i < limit; i++) {
        console.log(arr[i]);
    }
}

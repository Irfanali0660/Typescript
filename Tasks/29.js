"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let limit = Number(prompt("Enter the size of an array "));
let arr1 = [];
console.log("Enter the values of array: ");
for (let i = 0; i < limit; i++) {
    arr1[i] = Number(prompt(i + ") "));
}
myFilter(arr1, checkisitEven);
function myFilter(arr, clbkFun) {
    console.log("is even : " + clbkFun(arr));
}
function checkisitEven(arr) {
    let sum = arr.reduce((val1, val2) => {
        val1 += val2;
        return val1;
    }, 0);
    let isEven;
    console.log("Sum is: " + sum);
    if (sum % 2 == 0) {
        isEven = true;
    }
    else {
        isEven = false;
    }
    return isEven;
}

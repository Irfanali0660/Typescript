"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
const numbers = [];
let newArr = [];
const limit = Number(prompt('ENTER THE SIZE'));
console.log('Enter the values');
for (let i = 0; i < limit; i++) {
    numbers[i] = Number(prompt(""));
}
newArr = myFunction(numbers);
function myFunction(numbers) {
    console.log(numbers);
    return numbers.slice(0, -1).map((value, index) => value * numbers[index + 1]);
}
console.log(newArr);

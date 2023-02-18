"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let size = Number(prompt("Enter the size of the arrays : "));
let array1 = [];
let array2 = [];
console.log("Enter values (array1) : ");
for (let i = 0; i < size; i++) {
    array1[i] = Number(prompt(''));
}
console.log("Enter values (array2) : ");
for (let i = 0; i < size; i++) {
    array2[i] = Number(prompt(''));
}
let temp = [];
for (let i = 0; i < size; i++) {
    temp[i] = array1[i];
    array1[i] = array2[i];
    array2[i] = temp[i];
}
console.log("After swap");
console.log(array1);
console.log(array2);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let size = Number(prompt("Enter the size of the array : "));
let count = 0;
let array = [];
console.log("Enter the values of array");
for (let i = 0; i < size; i++) {
    array[i] = Number(prompt(''));
    if (i % 2 == 0) {
        count++;
    }
}
console.log(count);

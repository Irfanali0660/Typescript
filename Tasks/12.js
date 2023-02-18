"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let size = Number(prompt('enter the size of array : '));
let array = [];
for (let i = 0; i < size; i++) {
    array[i] = Number(prompt('Enter the value : '));
}
array.sort((a, b) => b - a);
console.log(array);

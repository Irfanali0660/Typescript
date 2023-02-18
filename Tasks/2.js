"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let number1 = Number(prompt("Enter the numbers : "));
let number2 = Number(prompt("Enter the number : "));
let sum = number1 + number2;
console.log(`answer is ${sum}`);

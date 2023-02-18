"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let limit = Number(prompt('Enter the number : '));
let sum = 0;
for (let i = 1; i <= limit; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}
console.log(`Sum of odd numbers = ${sum}`);

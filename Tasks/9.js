"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let limit = Number(prompt("Enter the limit : "));
for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

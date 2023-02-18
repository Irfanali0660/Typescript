"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let num = Number(prompt('ENTER VALUE : '));
let flag = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        flag++;
    }
}
if (flag == 2) {
    console.log('Prime Number');
}
else {
    console.log('Not prime Number');
}

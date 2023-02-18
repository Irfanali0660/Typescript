"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let string = prompt("ENTER THE STRING : ");
let string2 = "";
string2 = string.split("").reverse().join("");
console.log(string2);
if (string === string2) {
    console.log("Entered string is palindrome");
}
else {
    console.log("Entered string is not palindrome");
}

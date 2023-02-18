"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
try {
    let userHeight = Number(prompt('Enter your Height : '));
    if (isNaN(userHeight))
        throw "notANumberError";
    if (userHeight > 200)
        throw "HugeHeightError";
    if (userHeight < 40)
        throw "TinyHeightError";
    console.log(`Your height is ${userHeight} \n valid`);
}
catch (error) {
    console.log(error);
}

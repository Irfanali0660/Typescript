"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
main();
function main() {
    let array = [];
    let limit = Number(prompt('ENTER THE LIMIT'));
    getArray();
    function getArray() {
        console.log("Enter the values of array: ");
        for (let i = 0; i < limit; i++) {
            array[i] = new Array(limit);
            for (let j = 0; j < limit; j++) {
                array[i][j] = Number(prompt("[" + i + "][" + j + "] : "));
            }
        }
    }
    getDisplay();
    function getDisplay() {
        let row;
        console.log("Sum of array:  ");
        for (let i = 0; i < limit; i++) {
            row = "";
            for (let j = 0; j < limit; j++) {
                row += array[i][j] + " ";
            }
            console.log(row);
        }
    }
}

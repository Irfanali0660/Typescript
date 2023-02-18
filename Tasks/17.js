"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
class Calculator {
    addition(x, y) {
        return x + y;
    }
    subtraction(x, y) {
        return x - y;
    }
    multiplication(x, y) {
        return x * y;
    }
    division(x, y) {
        if (y === 0) {
            return "Error: division by zero";
        }
        return x / y;
    }
}
function main() {
    const calculator = new Calculator();
    console.log("Which operation do you want to perform?");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    const choice = Number(prompt("Enter your choice (1-4): "));
    const num1 = Number(prompt("Enter first number: "));
    const num2 = Number(prompt("Enter second number: "));
    let result;
    switch (choice) {
        case 1:
            result = calculator.addition(num1, num2);
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case 2:
            result = calculator.subtraction(num1, num2);
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case 3:
            result = calculator.multiplication(num1, num2);
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case 4:
            result = calculator.division(num1, num2);
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        default:
            console.log("Invalid input");
            break;
    }
}
main();

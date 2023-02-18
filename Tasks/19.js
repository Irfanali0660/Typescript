"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let Annualincome = Number(prompt("Annualincome :"));
let Incometax;
if (Annualincome <= 250000) {
    console.log("No Tax");
}
else if (Annualincome > 250000 && Annualincome <= 500000) {
    Incometax = (Annualincome * 5) / 100;
    console.log("Income Tax Amount =", Incometax);
}
else if (Annualincome > 500000 && Annualincome <= 1000000) {
    Incometax = (Annualincome * 20) / 100;
    console.log("Income Tax Amount =", Incometax);
}
else if (Annualincome > 1000000 && Annualincome <= 5000000) {
    Incometax = (Annualincome * 30) / 100;
    console.log("Income Tax Amount =", Incometax);
}

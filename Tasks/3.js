"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let P = Number(prompt("Enter the Principal amount : "));
let R = Number(prompt("Enter the Interst Rate : "));
let n = Number(prompt("Enter the Number of Year : "));
let SI = ((P * R * n) / 100);
console.log(`Simple Interes is ${SI}`);

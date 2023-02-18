"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
console.log("ENTER THE MARKS SCORED BY THE STUDTENT");
let written = Number(prompt('Enter The Mark'));
let Lab = Number(prompt('Enter The Lab mark'));
let Assignment = Number(prompt('Enter The Assignment Mark'));
let Grade = (written * 70) / 100 + (Lab * 20) / 100 + (Assignment * 10) / 100;
console.log(`Ansewer = ${written}*70)/100+(${Lab}*20)/100+(${Assignment}*10)/100 Grade of the student is ${Grade}`);

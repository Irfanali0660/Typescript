"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
try {
    let my_string = prompt('Enter a value:');
    console.log(typeof my_string);
    var use1 = my_string.split('').reverse('').join('');
    console.log(' reverse : ' + use1);
}
catch (err) {
    console.log(`Error: ${err.message}`);
}
finally {
    console.log(`type is : ${typeof use1}`);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
class area {
    circle() {
        let rad = parseInt(prompt("enter the radious: "));
        console.log("area of circle: " + 3.14 * rad * rad);
    }
    square() {
        let a = parseInt(prompt("enter the length: "));
        console.log("area of square: " + (a * a));
    }
    rectangle() {
        let l = parseInt(prompt("Enter the Length :"));
        let b = parseInt(prompt("Enter the Breadth :"));
        console.log("Area of the Rectangle is :" + (b * l));
    }
    triangle() {
        let b = parseInt(prompt("Enter the base :"));
        let h = parseInt(prompt("Enter the height :"));
        console.log("Area of the Rectangle is :" + (b * h) / 2);
    }
}
class myclass extends area {
    constructor() {
        super();
        console.log(" 1.Circle \n 2.Square \n 3.Rectangle \n 4.Triangle");
        var c = parseInt(prompt("Enter Your choice :"));
        switch (c) {
            case 1:
                this.circle();
                break;
            case 2:
                this.square();
                break;
            case 3:
                this.rectangle();
                break;
            case 4:
                this.triangle();
                break;
            default:
                console.log('invalid');
                break;
        }
    }
}
new myclass();

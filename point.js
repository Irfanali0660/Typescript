"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(x);
    }
    draw() {
        console.log('X :' + this.x + ' Y :' + this.y);
    }
}
exports.Point = Point;

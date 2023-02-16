"use strict";
class Point {
    draw() {
        console.log('X :' + this.x + ' Y :' + this.y);
    }
    getdistance(another) {
    }
}
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

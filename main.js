"use strict";
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, 'string', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
let backgroundColor = color.Red;

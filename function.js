"use strict";
function first() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally", i);
}
first();
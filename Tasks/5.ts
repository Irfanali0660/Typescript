import PromptSync = require("prompt-sync");
let prompt=PromptSync()

let mark:number = Number(prompt("Enter the mark "))

if(mark>=90 && mark<=100){
    console.log("A");
}
else if(mark>=80 && mark<=89){
    console.log("B");
}
else if(mark>=70 && mark<=79){
    console.log("C");
}
else if(mark>=60 && mark<=69){
    console.log("D");
}
else if(mark>=50 && mark<=59){
    console.log("E");
}
else if(mark<50){
    console.log("Failed");
}


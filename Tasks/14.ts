import PromptSync from "prompt-sync";
let prompt=PromptSync()
let limit:number=Number( prompt("Enter the size of an array "))
let arr1:number[][]= [];
let arr2:number[][]= [];
let arr3:number[][]= [];
for (var i = 0; i < limit; i++) {
    arr1[i] = new Array(limit);
    arr2[i] = new Array(limit);
    arr3[i] = new Array(limit);
  }
console.log("Enter the values of array1: ")
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arr1[i][j] = Number(prompt("["+i+"]["+j+"] "))
    }
}
console.log("Enter the values of array2: ")
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arr2[i][j] = Number(prompt("["+i+"]["+j+"] "))
    }
}
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arr3[i][j] = arr2[i][j] + arr1[i][j]; 
    }
}
console.log( " Sum of 2 arrays is:");
let row;
for (let i = 0; i < limit; i++) {
    row = "";
    for (let j = 0; j < limit; j++) {
        row += arr3[i][j] + " "; 
    }
    row += "\n";
    console.log(row); 
}






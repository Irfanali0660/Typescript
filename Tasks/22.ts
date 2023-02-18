import PromptSync from "prompt-sync";
let prompt = PromptSync();

let limit: number = Number(prompt("Enter the size of an array "));
let arr1: number[][] = [];
let arr2: number[][] = [];
let sum: number[][] = [];
getArray();
function getArray() {
  console.log("Enter the values of array: ");
  for (let i = 0; i < limit; i++) {
    arr1[i] = new Array(limit);
    for (let j = 0; j < limit; j++) {
      arr1[i][j] = Number(prompt("[" + i + "][" + j + "] : "));
    }
  }
  console.log("Enter the values of array: ");
  for (let i = 0; i < limit; i++) {
    arr2[i] = new Array(limit);

    for (let j = 0; j < limit; j++) {
      arr2[i][j] = Number(prompt("[" + i + "][" + j + "] : "));
    }
  }

  for (let i = 0; i < limit; i++) {
    sum[i] = new Array(limit);
    for (let j = 0; j < limit; j++) {
      sum[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
}
displayarray();
function displayarray() {
  let row;
  console.log("Sum of array:  ");
  for (let i = 0; i < limit; i++) {
    row = "";
    for (let j = 0; j < limit; j++) {
      row += sum[i][j] + " ";
    }
    console.log(row);
  }
}

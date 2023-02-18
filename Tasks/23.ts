import PromptSync from "prompt-sync";
let prompt=PromptSync()

main()
function main(){
let array:number[][]=[]
let limit:number=Number(prompt('ENTER THE LIMIT'))
getArray()
function getArray():void{
console.log("Enter the values of array: ");
  for (let i = 0; i < limit; i++) {
    array[i] = new Array(limit);
    for (let j = 0; j < limit; j++) {
        array[i][j] = Number(prompt("[" + i + "][" + j + "] : "));
    }
  }
}
getDisplay()
function getDisplay():void{
    let row;
    console.log("Sum of array:  ");
    for (let i = 0; i < limit; i++) {
      row = "";
      for (let j = 0; j < limit; j++) {
        row += array[i][j] + " ";
      }
      console.log(row);
    }
}
}

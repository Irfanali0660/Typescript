import PromptSync from "prompt-sync";
let prompt=PromptSync()

let size:number=Number(prompt("Enter the size of the arrays : "))

let array1:number[]=[];
let array2:number[]=[];
console.log("Enter values (array1) : ")
for (let i = 0; i < size; i++) {
   array1[i] = Number(prompt(''))
}
console.log("Enter values (array2) : ")
for (let i = 0; i < size; i++) {
   array2[i] = Number(prompt(''))
}
let temp:number[]=[];
for(let i=0;i<size;i++){
    temp[i]=array1[i];
    array1[i]=array2[i];
    array2[i]=temp[i];
}
console.log("After swap");
console.log(array1);
console.log(array2);



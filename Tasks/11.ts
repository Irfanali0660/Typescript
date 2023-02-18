import PromptSync from "prompt-sync";
let prompt=PromptSync()

let size:number=Number(prompt("Enter the size of the array : "))
let count:number=0
let array:number[]=[]

console.log("Enter the values of array")
for(let i=0;i<size;i++){
    array[i]=Number(prompt(''))
    if(i%2==0){
        count++
    }
}
console.log(count);

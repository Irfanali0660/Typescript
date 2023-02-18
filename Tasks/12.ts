import PromptSync from "prompt-sync";
let prompt=PromptSync()

let size:number=Number(prompt('enter the size of array : '))
let array:number[]=[]

for(let i=0;i<size;i++){
    array[i]=Number(prompt('Enter the value : '))
}
array.sort((a:number,b:number) => b - a);
console.log(array);

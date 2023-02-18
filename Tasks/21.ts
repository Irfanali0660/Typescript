import PromptSync from "prompt-sync";
let prompt=PromptSync()

const numbers:number[]= []
let newArr:number[]=[]
const limit:number=Number(prompt('ENTER THE SIZE'))
console.log('Enter the values');
for (let i = 0; i < limit ;i++) {
    numbers[i]=Number(prompt(""))
}
newArr = myFunction(numbers)
function myFunction(numbers:number[]){
    console.log(numbers); 
    return numbers.slice(0, -1).map((value:number, index:number) => value * numbers[index+1]);
  }
console.log(newArr);


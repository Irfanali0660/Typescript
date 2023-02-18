import PromptSync from "prompt-sync";
let prompt=PromptSync()

let limit:number=Number(prompt('Enter the number : '));
let sum:number=0;
for (let i = 1; i <= limit; i++) {
    if(i%2!=0){
        sum=sum+i;
    }
}
console.log(`Sum of odd numbers = ${sum}`);

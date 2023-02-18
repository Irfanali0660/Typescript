import PromptSync from "prompt-sync";
let prompt=PromptSync()

let limit:number=Number(prompt("Enter the limit"))
let num:number=1;
for(let i=1;i<=limit;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row +=num+" ";
        num++;
    }
    console.log(row);
}

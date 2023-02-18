import PromptSync from "prompt-sync";
let prompt=PromptSync()
let mark:number = Number(prompt("Enter the mark "))
if(mark>=50){
    console.log("passed");
}
else{
    console.log("failed");
}
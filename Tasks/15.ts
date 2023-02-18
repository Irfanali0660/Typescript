import PromptSync from "prompt-sync";
let prompt=PromptSync()

// let limit:number=Number(prompt("Enter the limit: ")) 
// let arr:number[]= [];
// getArray();
// function getArray():void{
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Number(prompt(i+") "))
//     }
// }
// displayArray()
// console.log("Result: ");
// function displayArray():void{
//     for (let i = 0; i < limit; i++) {
//         console.log(arr[i]);
        
//     }
// }


let limit:number=Number(prompt("ENTER"))
let arr:number[]=[]
getArray()
function getArray():void{
    console.log("VALUES");
    for (let  i= 0;  i< limit; i++) {
        arr[i]=Number(prompt(""))
    }
}
display()
function display():void{
    for (let i = 0; i < limit; i++) {
        console.log(arr[i]);
        
    }
}
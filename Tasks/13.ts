import PromptSync from "prompt-sync";
let prompt=PromptSync()

let string:string=prompt("ENTER THE STRING : ")

let string2= "";
string2 = string.split("").reverse().join("");


if(string===string2){
console.log("Entered string is palindrome");
}
else{
console.log("Entered string is not palindrome");
}
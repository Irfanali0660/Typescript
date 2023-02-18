import PromptSync from "prompt-sync";
let prompt=PromptSync()

let num:number=Number(prompt('ENTER VALUE : '))
let flag:number=0
for(let i=1;i<=num;i++ ){
    if(num%i==0){
        flag++
    }
}
if(flag==2){
    console.log('Prime Number'); 
}
else{
    console.log('Not prime Number');
}
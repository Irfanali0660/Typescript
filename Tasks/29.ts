import PromptSync from "prompt-sync";
let prompt=PromptSync()

let limit:number = Number(prompt("Enter the size of an array "))
let arr1:number[]= [];


    console.log("Enter the values of array: ")
    for (let i = 0; i < limit; i++) {
            arr1[i] = Number(prompt(i + ") "))
    }
    myFilter(arr1, checkisitEven);
    function myFilter(arr:number[], clbkFun:any){
        console.log("is even : "+clbkFun(arr));
    }
    function checkisitEven(arr:number[]){
       let sum :number=  arr.reduce((val1, val2)=>{
            val1 += val2;
            return val1;
        },0)
        let isEven;
        console.log("Sum is: "+sum);
        if (sum%2==0) {
            isEven = true;
        }else{
            isEven = false;
        }
        return isEven;
    }
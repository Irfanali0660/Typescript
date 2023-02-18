import PromptSync from "prompt-sync";
let prompt=PromptSync()

let Annualincome:number=Number(prompt("Annualincome :"))
let Incometax:number
if(Annualincome<=250000){
    console.log("No Tax");
}
else if(Annualincome>250000&&Annualincome<=500000){
    Incometax=(Annualincome*5)/100;
    console.log("Income Tax Amount =",Incometax);
}
else if(Annualincome>500000&&Annualincome<=1000000){
        Incometax=(Annualincome*20)/100;
        console.log("Income Tax Amount =",Incometax);
    }
else if(Annualincome>1000000&&Annualincome<=5000000){
        Incometax=(Annualincome*30)/100;
        console.log("Income Tax Amount =",Incometax);
    }
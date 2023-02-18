import PromptSync from "prompt-sync";
let prompt=PromptSync()

try {
    let userHeight:number= Number(prompt('Enter your Height : '))
    if (isNaN(userHeight)) throw "notANumberError";
    if (userHeight > 200) throw "HugeHeightError";
    if (userHeight < 40) throw "TinyHeightError";
    console.log(`Your height is ${userHeight} \n valid`);
}
catch (error) {
    console.log(error)
}
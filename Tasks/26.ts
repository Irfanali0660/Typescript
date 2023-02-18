import PromptSync from "prompt-sync";
let prompt=PromptSync()

try {
    let my_string :any= prompt('Enter a value:');
    console.log(typeof my_string);
    
    var use1 :any= my_string.split('').reverse('').join('');
    console.log(' reverse : ' + use1)
}
catch (err:any) {
    console.log(`Error: ${err.message}`)
}
finally {
    console.log(`type is : ${typeof use1}`)
}


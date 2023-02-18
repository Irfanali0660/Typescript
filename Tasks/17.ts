import PromptSync from "prompt-sync";
let prompt=PromptSync()

class Calculator {
   
    addition(x:number, y:number){
      return x + y;
    }
  
    subtraction(x:number, y:number) {
      return x - y;
    }
  
    multiplication(x:number, y:number) {
      return x * y;
    }
  
    division(x:number, y:number) {
      if (y === 0) {
        return "Error: division by zero";
      }
      return x / y;
    }
  }
  function main() {
    const calculator = new Calculator();
  
    console.log("Which operation do you want to perform?");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
  
    const choice = Number(prompt("Enter your choice (1-4): "));
  
    const num1:number = Number(prompt("Enter first number: "))
    const num2:number = Number(prompt("Enter second number: "))
  
    let result;
    switch (choice) {
      case 1:
        result = calculator.addition(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 2:
        result = calculator.subtraction(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 3:
        result = calculator.multiplication(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case 4:
        result = calculator.division(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.log("Invalid input");
        break;
    }
  }
  main();
  
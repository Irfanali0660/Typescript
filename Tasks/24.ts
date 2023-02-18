import PromptSync from "prompt-sync";
let prompt=PromptSync()

class area {
    circle():void{
        let rad:number = parseInt(prompt("enter the radious: "))
        console.log("area of circle: " + 3.14 * rad * rad)
    }
    square():void{
        let a:number = parseInt(prompt("enter the length: "))
        console.log("area of square: " + (a * a))
    }
    rectangle():void{
        let l:number = parseInt(prompt("Enter the Length :"));
        let b:number = parseInt(prompt("Enter the Breadth :"));
        console.log("Area of the Rectangle is :" + (b * l));
    }
    triangle():void{
        let b:number = parseInt(prompt("Enter the base :"));
        let h:number = parseInt(prompt("Enter the height :"));
        console.log("Area of the Rectangle is :" + (b * h) / 2);
    }
}
class myclass extends area {
    constructor() {
          super();
        console.log(" 1.Circle \n 2.Square \n 3.Rectangle \n 4.Triangle");
        var c = parseInt(prompt("Enter Your choice :"));
        switch (c) {
            case 1: this.circle()
                break;
            case 2: this.square()
                break;
            case 3: this.rectangle()
                break;
            case 4: this.triangle()
                break;
            default: console.log('invalid')
                break;
        }
    }
}
new myclass();
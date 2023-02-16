class Point1{
    // x:number;
    // y:number;


    constructor(private x?:number,private y?:number){
        this.x=x;
        this.y=y;
        console.log(this.x);
        
    }

    draw(){
        console.log('X: '+this.x+' Y :'+this.y);
    }

}

let point1=new Point1(1,2)
point1.x=3;
point1.draw()
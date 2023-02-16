class Point2{

    constructor(private x?:number, private y?:number){

    }
    draw(){
        console.log('X :'+this.x+'Y '+this.y);
    }
    getX(){
        return this.x;
    }
    setX(value: number){ 
        if(value<0)
            throw new Error('Value Cannot be less than 0');
            this._x=value
    }
}

let point2= new Point2(1,2)
let x=point2.getX()
point2.setX(10)
point2.X=10;
point2.draw()
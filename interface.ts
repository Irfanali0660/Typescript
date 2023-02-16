interface Point{
    x:number,
    y:Number
}
let drawPoint=(point:Point)=>{
    console.log(point);   
}
drawPoint({
    x: 1,
    y: 2 
})
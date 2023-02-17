// const obj={
//     name:'don'
// }

// obj.name='bob'

// console.log(obj);

// var getfun=function(){
//     return 10
// }

// console.log(getfun());
// const getarrowvalue=(value:number)=>10+value;
// console.log(typeof getarrowvalue(5));

//+++++++++++++++++++ LEXICAL THIS +++++++++++++++++++++++++

// var employee={
//     id:1,
//     greet:function(){
//         setTimeout(  ()=>{
//             console.log(this.id);  
    
//         },1000)
//     }
// }

// employee.greet()

// +++++++++++++++++DEFAULT FUNCTION++++++++++++++++++++++++++++

// let getValue=function(value=10,bonus=5){
//     console.log(value+bonus );
// }

// getValue();
// getValue(20);
// getValue(10,20)
// getValue(undefined,52)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let percentage =()=>0.1;
// let getValue=function(value=10,bonus=value*percentage()){
//     console.log(value*percentage()+" PERC");
//     console.log(value,bonus+" TWO VARI");
    
//     console.log(value+bonus+" PLUS");
//     console.log(arguments.length+" LENGTH");
// }

// getValue();
// getValue(20);
// getValue(30,30)

// +++++++++++++++++++REST OPERATORS+++++++++++++++++++++++++++

// let displayColors=function(message1:string, ...colors:string[]){
//     console.log(message1)
//     for(let i in colors){
//         console.log(colors[i]);     
//     }
//     console.log(colors); 
// }
// let message1='list of colors'

// displayColors(message1,'red')
// displayColors(message1,'red','blue')
// displayColors(message1,'red','blue','green')

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const names: readonly string[] = ["Dylan"];
// names.push("Jack"); 

// console.log(names);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const numbers = [1, 2, 3]; // inferred to type number[]

// numbers.push(4); // no error

// // comment line below out to see the successful assignment 
// numbers.push('2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// console.log(numbers);

// let head: number = numbers[0]; // no error

// console.log(head);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // define our tuple
// let ourTuple:readonly [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];


// console.log(ourTuple);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const graph: [number, number,number] = [55.2, 41.3,55];
// const [z, y] = graph;

// console.log(graph[2]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const car1: { type: string, mileage?: number } = {
//     type: "Toyota"
//   };
  
  
  
//   console.log(car1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++


// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`)
// }

// printStatusCode(404);
// printStatusCode('hello');

// +++++++++++++++++++++++++OPtional type+++++++++++++++++++++++++++

// function add(a: number, b: number,s:number, c?: number) {
//   console.log(arguments);
//   return a + b + (c || 0)+s;  
// }

// console.log(add(10,20,55,44));

// ++++++++++++++++++++++++default parameters++++++++++++++++++++++++++++


// function pow(value: number, exponent: number = 2) {
//   return value ** exponent;
// }

// console.log(pow(10));

// +++++++++++++++++++++++++ Rest parameter +++++++++++++++++++++++++++++

// function add(a: number, b: number, ...rest: number[]) {
//   console.log(...rest);
  
//   return a + b + rest.reduce((p, c) =>{ return p + c}, 0);
// }

// console.log(add(10,10,10,10,10));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let x1: unknown = 33;
// console.log((<number>x1));

//++++++++++++++++++++++++CASTING AS++++++++++++++++++++++++++++++++

// let x1 = 'hello';

// console.log(((x1 as unknown) as string).length);

// +++++++++++++++++++++++CLASSES+++++++++++++++++++++++++++++

// class Person {
//   name1: string;

//   constructor(){
//     this.name1='';
//   }
// } 
// const person = new Person();
// person.name1= "Jane";

// console.log(person);

// +++++++++++++++++++++++++VISIBILITY++++++++++++++++++++++++++

// class Person {
//   private name: string;

//   public constructor(name: string) {
//     console.log(name);
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

// class Person {
//   // name is a private member variable
//   public constructor(private name: string) {}

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName());

// +++++++++++++++++++ INTERFACE ++++++++++++++++++++++++++++++++


// interface shape{
//   getnumber:()=>number;
// }

// class demo implements shape{
//   public constructor( protected readonly width:number,protected readonly height:number){} 

//   public getnumber () :number{
//     return this.width*this.height;
//   }
// }
// const myRect= new demo(10,20);

// console.log(myRect.getnumber());

// +++++++++++++++++++++++++++++++CLASSES++++++++++++++++++++++++++++++++++++

// class NamedValue<V>{
//   private _value: V | undefined;

//   constructor(private name: string) {}

//   public setValue(value: V) {
//     this._value = value;
//   }

//   public getValue(): V | undefined {
//     return this._value;
//   }

//   public toString(): string {
//     return `${this.name}: ${this._value}`;
//   }
// }
      
// const value = new NamedValue<number>('myNumber');
// console.log(value);

// value.setValue(10);

// console.log(value.toString()); // myNumber: 10

// function hello<T>(value:number[]):void{
//   value.reverse().map((i)=>{
//     console.log(i);
//   })
// }
// hello<number[]>([1,2,3])

// +++++++++++++++++++++++ Keyof +++++++++++++++++++++++++++

interface Person {
  name: string;
  age: number;
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(property);
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = {
  name: "Max",
  age: 27
};

printPersonProperty(person, "name"); // Printing person property name: "Max"s
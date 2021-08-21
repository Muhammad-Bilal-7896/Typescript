//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

//Variable Declarations
//Like in c++ when defining a constant we have to assign it a value
let x = 10;
const y = 20;

//Where as Let can be defined withuot assigning it a value
let sum;
const title:string = 'BilalMohib';

//It is a rule that in type script we have to declare the type of the variable
//Although in some cases it works as above code is working without actually declaring the type defination
let isBegginer:boolean = true;
let total:number = 0;
let name : string = 'Muhammad Bilal';

let status:string = `${name} is Programming and learning with typescript`;

console.log(status);
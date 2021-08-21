//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

let message = "sdafsdf";

console.log(message);


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
let name : string = 'Pakistan';

let status:string = `${name} is Programming and learning with typescript`;

console.log(status);


//Null definations
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName:string = undefined;

//Arrays in typescript
let list1: number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

///////////////////Array with values of mixed type/////////////////////
//Note that the number of values and declared types should be the same
//i.e If there are two definations string and number then things to remember are:
//1) Only array will contain two elements
//2) The order will be same i.e one string and one number
//3) The number cant come first the order will be followed as its defined
//So here is an example how would we do that.
let mixedArray:[string,number] = ['Chris',22];

///////////////////////ENUMS/////////////////

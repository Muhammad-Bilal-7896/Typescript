export {}

let message = "sdafsdf";

console.log(message);


//Variable Declarations
let x = 10;
const y = 20;

let sum;

const title = 'BilalMohib';

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

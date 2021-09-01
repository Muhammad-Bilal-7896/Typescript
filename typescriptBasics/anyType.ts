//any Type in typescript

//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

//Usage
//As Given by the defination We use any type when we are unsure that what type should we write we use the any type

let randomValue:any=10;
randomValue=false;
randomValue = 'Bilal'

//Characteristics

//1) The any type is the most compatible type in typescript(Can Hold any type); 
//2) Helpful when you are just migrating from javascript to typescript
//3) Any type dosen't forces to do any checking before we try to call,construct or access properties on these values


let aVar:any = 10;
console.log(aVar)

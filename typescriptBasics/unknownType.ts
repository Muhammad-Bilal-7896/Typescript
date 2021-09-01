//unkown Type in typescript

//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export { }

//Unkown is very similar to any type and any value is assignable to unkown although no function constructor or method can be called
let check: unknown = 10;

function hasName(obj:any):obj is {name:string}{
    return !!obj && "object" &&
    "name" in obj
    //From here the compiler is saying the error is Please if anyone of you who is reading knows exactly why this error is coming what
    //Should be used instead of in operator than please inform me bilalmohib7896@gmail.com is my email address.I appreciate your help.
}

if(hasName(check)){
    console.log(check.name);
}
(check as string).toUpperCase();

//I dont know this code is giving error while i am following the tutorial.I think that he hadnt tested this thing thats why he is going wrong over here.
//The error is that TypeError: Cannot use 'in' operator to search for 'name' in 10
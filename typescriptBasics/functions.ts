//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export { }

//Functions in typescript

function mul(n1:number,n2:number)
{
    return n1+n2;
}

let val:number = mul(6,4); //Intellisense provides the info that function types what are available arguments etc in typescript
//add(4,"10"); //This will give error because 10 is string not a number

console.log("The value returned from function is : ",val);

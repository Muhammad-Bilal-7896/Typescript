//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export { }

//Functions in typescript

function mul(n1: number, n2: number) {
    return n1 + n2;
}

//We can specify a return type of function at the end of the curly braces its upto us whether we should declare the type or not

function functionWithReturnTypeDeclaration(n1: number, n2: number): number {
    return n1 + n2;
}

let val: number = mul(6, 4); //Intellisense provides the info that function types what are available arguments etc in typescript
//add(4,"10"); //This will give error because 10 is string not a number

console.log("The value returned from function is : ", val);

//In my case just as c++ wants the exact number of parameters just like that typescript wants that too i.e in javascript it was possible to call a function without parameters but in typescript its not

//But wait we have a way for optional parameters simple write ? at the end of the parameter
//Now you can call the function without that optional parameters
//Ok
//Lets have an example

//But remember the optional parameter must be at the end.Ok
//It will throw an error if you define a required parameter at the end after optional parameter
//Always optional parameter will be at the end.Ok

//Also remember parameters cant have question mark and initialization both
function optional_parameters(n2: number, n1?: number): number {
    if (n2) {
        return n1 + n2;
    }
    else {
        return n1;
    }
}

let val2 = optional_parameters(3);

console.log("Val 2 is equal to: ", val2);

//Clearing the previous console
console.clear();

//Default parameters in functions of Type Script
function default_parameters(n2: number, n1: number = 10): number {
    return n1 + n2;
}
let val3 = default_parameters(7);
console.log("Val 3 is equal to: ", val3);

//So conclusion is that default parameters are optional parameters
//So functions are cleared in typescript
//So lets move on to interfaces
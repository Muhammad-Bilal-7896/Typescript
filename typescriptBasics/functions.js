"use strict";
exports.__esModule = true;
//Functions in typescript
function mul(n1, n2) {
    return n1 + n2;
}
//We can specify a return type of function at the end of the curly braces its upto us whether we should declare the type or not
function functionWithReturnTypeDeclaration(n1, n2) {
    return n1 + n2;
}
var val = mul(6, 4); //Intellisense provides the info that function types what are available arguments etc in typescript
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
function optional_parameters(n2, n1) {
    return n1 + n2;
}
var val2 = optional_parameters(3);
console.log("Val 2 is equal to: ", val2);

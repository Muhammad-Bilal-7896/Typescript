"use strict";
exports.__esModule = true;
//Type inference
//So basically the concept of type inference is that 
//In typescript sometimes you forgot to declare the type of variable or means you forgot to specify the type 
//So what happens in that case is that if you dont assign any value when you initialized then you can reassign that 
//Variable later on to any other value of any other type
//But if you are defining a variable and also initializing it while defining so what happens is that
//Type script automatically infers i.e assumes a type specific the one with which you initialzed the variable while defining so that variable will have that type so its not possible to redefine that variable to any other data type value
//Thats all
var a;
a = 10;
a = true;
//This demonstrates the type inference
//let b = 20;
//b = true;
console.log(a);

//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

//Type inference
//So basically the concept of type inference is that 
//In typescript sometimes you forgot to declare the type of variable or means you forgot to specify the type 
//So what happens in that case is that if you dont assign any value when you initialized then you can reassign that 
//Variable later on to any other value of any other type
//But if you are defining a variable and also initializing it while defining so what happens is that
//Type script automatically infers i.e assumes a type specific the one with which you initialzed the variable while defining so that variable will have that type so its not possible to redefine that variable to any other data type value
//Thats all

let a;
a = 10;
a = true;

//This demonstrates the type inference hover over the b when its giving error by uncommenting that you will know that
//let b = 20;
//b = true;
//also it will provide methods for integers only 

console.log(a);

//Type inference does not work on variable a as their is no initialization

//Enums in typescript

//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

//Enum is the way of giving a friendly name to a set of enumerate values

//Enum Defination: To declare an enum we start with an enum keyword,Followed by an enum name(You have to give) followed by curly braces and inside the curly braces there are list of enum values

//Enum of colors having colors Red,Green,Blue
enum Color {Red=5,Green,Blue};

let c : Color = Color.Green;
console.log(`The value of c is equal to : ${c}`);

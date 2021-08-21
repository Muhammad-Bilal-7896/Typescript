"use strict";
//Enums in typescript
exports.__esModule = true;
//Enum is the way of giving a friendly name to a set of enumerate values
//Enum Defination: To declare an enum we start with an enum keyword,Followed by an enum name(You have to give) followed by curly braces and inside the curly braces there are list of enum values
//Enum of colors having colors Red,Green,Blue
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("The value of c is equal to : " + c);

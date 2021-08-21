"use strict";
exports.__esModule = true;
var message = "sdafsdf";
console.log(message);
//Variable Declarations
//Like in c++ when defining a constant we have to assign it a value
var x = 10;
var y = 20;
//Where as Let can be defined withuot assigning it a value
var sum;
var title = 'BilalMohib';
//It is a rule that in type script we have to declare the type of the variable
//Although in some cases it works as above code is working without actually declaring the type defination
var isBegginer = true;
var total = 0;
var name = 'Pakistan';
var status = name + " is Programming and learning with typescript";
console.log(status);
//Null definations
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Arrays in typescript
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
///////////////////Array with values of mixed type/////////////////////
//Note that the number of values and declared types should be the same
//i.e If there are two definations string and number then things to remember are:
//1) Only array will contain two elements
//2) The order will be same i.e one string and one number
//3) The number cant come first the order will be followed as its defined
//So here is an example how would we do that.
var mixedArray = ['Chris', 22];
///////////////////////ENUMS/////////////////

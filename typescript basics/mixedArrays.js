"use strict";
exports.__esModule = true;
///////////////////Array with values of mixed type/////////////////////
//Note that the number of values and declared types should be the same
//i.e If there are two definations string and number then things to remember are:
//1) Only array will contain two elements
//2) The order will be same i.e one string and one number
//3) The number cant come first the order will be followed as its defined
//So here is an example how would we do that.
var mixedArray1 = ['bilal', 4];
var mixedArray2 = ['ammar', 10, true];
var mixedArray3 = ['ammar', 10, true, ["Mohib-ul-Nabi", "Attiqa", "Bilal", "Ammar"]];
console.log("The first Mixed Array is equal to: " + mixedArray1);
console.log("The second Mixed Array is equal to: " + mixedArray2);
console.log("The second Mixed Array is equal to: " + mixedArray3);

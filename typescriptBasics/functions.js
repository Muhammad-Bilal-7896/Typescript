"use strict";
exports.__esModule = true;
//Functions in typescript
function mul(n1, n2) {
    return n1 + n2;
}
var val = mul(6, 4); //Intellisense provides the info that function types what are available arguments etc in typescript
//add(4,"10"); //This will give error because 10 is string not a number
console.log("The value returned from function is : ", val);

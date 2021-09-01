"use strict";
//any Type in typescript
exports.__esModule = true;
//Usage
//As Given by the defination We use any type when we are unsure that what type should we write we use the any type
var randomValue = 10;
randomValue = false;
randomValue = 'Bilal';
//Characteristics
//1) The any type is the most compatible type in typescript(Can Hold any type); 
//2) Helpful when you are just migrating from javascript to typescript
//3) Any type dosen't forces to do any checking before we try to call,construct or access properties on these values
var aVar = 10;
console.log(aVar);

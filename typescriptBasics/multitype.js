"use strict";
exports.__esModule = true;
//MultiType variable
//So type script provides the ability to specify the union of types for the same variable i.e we can declare a variable with that can have valuse of multiple types | operator is used to specify the multiple types in typescript
var multiType;
multiType = 20;
multiType = true;
//Its use case is when a value is not undercontrol may be its coming from a library may be its coming from a database where you dont know the type may be.
//Union types restrict to the specified types where as any type has no restrictions i.e it can take any value
console.log("The multitype value is : ", multiType);
//Also in union type there is intellisance for available functions of defined types
//But in any type no intellisance is available so in this case their is an advantage of union type

"use strict";
//unkown Type in typescript
exports.__esModule = true;
//Unkown is very similar to any type and any value is assignable to unkown although no function constructor or method can be called
var check = 10;
function hasName(obj) {
    return !!obj && "object" &&
        "name" in obj;
}
if (hasName(check)) {
    console.log(check.name);
}
check.toUpperCase();

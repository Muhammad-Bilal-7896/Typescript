//Arrays in typescript

//This export is added because typescript is a language not a scripting language so it treats
//every .ts file as a module instead of a script so we export nothing so the module exports nothing
export {}

//This one is the one syntax of declaring the arrays in typescript
let arraySyntax1: number[] = [1,2,3];
//This one is another syntax of declaring the arrays in typescript
let arraySyntax2:Array<number> = [1,2,3];

//There is no difference in both syntaxes they both are same
console.log(`The first array is equal to: ${arraySyntax1}\n`);
console.log(`The second array is equal to: ${arraySyntax1}\n`);

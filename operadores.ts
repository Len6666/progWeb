// == operadores 
let a: number = 10;
let b: number = 5;

//aritmeticos
console.log('soma:', a + b);
console.log("subtraçao", a - b);
console.log("multiplicaçao", a * b);
console.log("divisao", a / b);
console.log("resto", a % b);

// relacionais
console.log("igual", a == b);
console.log("diferente", a != b);
console.log("maior que", a > b);
console.log("menor que", a < b);
console.log("maior ou igual", a >= b);
console.log("menor ou igual", a <= b);

// identidade estrita 
console.log("identico", a === b);
console.log("nao identico", a !== b);

//logicos
let x: boolean = true;
let y: boolean = false;

console.log('and:', x && y);
console.log('or:', x || y);
console.log('not:', !x);

// operador condicional ternario
let idade: number = 17;
let acesso = idade >= 18 ? 'pode beijar na boca' : 'nao pode'; //condicao ? valor se true : valor se false

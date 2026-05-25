let letra = "A";
console.log(letra.charCodeAt(0));

let simbolo = "!";
console.log(simbolo.charCodeAt(0));


let char = String.fromCharCode(66);
console.log(char);

let frase = "JavaScript é incrível!";
let resultado = frase.includes("incrível");
console.log(resultado);

resultado = frase.includes("Incrível");
console.log(resultado)

let texto = "Hello, JavaScript world!";
resultado = texto.includes("JavaScript", 7); 
console.log(resultado);

let mensagem = "Hello World!";
let saudacao = mensagem.slice(0, 5);
console.log(saudacao);

mensagem = "Java Script é internet";
let ultimaPalavra = mensagem.slice(-8);
console.log(ultimaPalavra);

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);
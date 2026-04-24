// Podemos usar aspas duplas e simples em strings
let aspasSimples = 'Isso é uma string';
console.log(aspasSimples);
let aspasDuplas = "Isso também é uma string";
console.log(aspasDuplas);

// Strings são imutavéis quando são criadas, então não podemos mudar os caracteres diretamente
let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);

// Concatenação de Strings
let primeiroNome = "Nicolas";
let segundoNome = "Damasceno"
let nomeCompleto = primeiroNome + " " + segundoNome;
console.log(nomeCompleto);

let saudacoes = 'Olá';
saudacoes += ', Gustavo!'
console.log(saudacoes);

let str1 = "Olá";
let str2 = "Mundo";

let resultado = str1.concat(' ', str2);
console.log(resultado);

let nome = "Alice"
console.log("Hello, " + nome + "!");

let idade = 25;
console.log("Name:", nome, "Idade:", idade);

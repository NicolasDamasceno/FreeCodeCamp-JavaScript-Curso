// Usando typeof para retornar o valor de uma variável

let usuarioLogado = true;
console.log(typeof usuarioLogado); // Retorna Booleano True

// Atenção ao Null
let exemploNull = null;
console.log(typeof exemploNull) // Retorna object pois null em JS é caracterizado como um objeto

// Objetos em Js são representados por uma coleção de valores chave
let pet = {
    nome: "Caramelo",
    idade: 3,
    tipo: "cachorro"
};

// Symbol é um valor único e imutavél daquela variavel
const cyptroKey = Symbol("marEbrisa");
const crptoKey2 = Symbol("marEbrisa");
// console.log(cyptroKey = crptoKey2) // Retorna falso

// BigInt é um número muito largo para o Number
const numeroGrande = 1234567890123456789012345678901234567890n;

// Acessando um caractere pelo índice
let saudacoes = 'olá'
console.log(saudacoes[1]);
console.log(saudacoes[saudacoes.length - 1]);

let letrasInicio = saudacoes[0] + saudacoes[1];
console.log(letrasInicio);

// Quebra de linha
let poema = "No meio do caminho tinha uma pedra,\nTinha uma pedra no meio do caminho"
console.log(poema);

// \ para usar aspas
let fala = "Ela disse, \"Olá\"!";
console.log(fala);

let fala2 = "Copo d\'gua.";
console.log(fala2);

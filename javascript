/* QUESTÃO 1*/

function sum(a, b){
    return a + b;
}

a = 10;
b = 1;
console.log(sum(a, b));

/* QUESTÃO 2*/

function isPar(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

num = 10;
num2 = 11;
console.log("O número é par =", isPar(num));
console.log("O número é par =", isPar(num2));

/* QUESTÃO 3*/

function media(a, b, c){
    media = (a + b + c) / 3;
    return parseFloat(media.toFixed(2));
}
media1 = 21;
media2 = 8;
media3 = 5;
console.log("A média é =", media(media1, media2, media3));

/* QUESTÃO 4*/

function imc(peso, altura){
    imc = peso / (altura * altura);
    return parseFloat(imc.toFixed(2));
}
peso = 56;
altura = 1.55;
console.log("O IMC é =", imc(peso, altura));

/* QUESTÃO 5*/

function calculardesconto(preco, desconto){
    preco = preco - (preco * (desconto / 100));
    return parseFloat(preco.toFixed(2));
}
preco = 100;
desconto = 25;
console.log("Valor com desconto = R$", calculardesconto(preco, desconto));

/* QUESTÃO 6*/

function calcularImpostoRenda(salariobruto) {
    if (salariobruto <= 1903.98) {
        return 0;
    } else if (salariobruto > 1903.98 && salariobruto <= 2826.65) {
        return parseFloat((salariobruto * 0.075).toFixed(2));
    } else if (salariobruto > 2826.65 && salariobruto <= 3751.05) {
        return parseFloat((salariobruto * 0.15).toFixed(2));
    } else if (salariobruto > 3751.05 && salariobruto <= 4664.68) {
        return parseFloat((salariobruto * 0.225).toFixed(2));
    } else {
        return parseFloat((salariobruto * 0.275).toFixed(2));
    }
}

const salario = 1560;
console.log("Total em impostos: R$", calcularImpostoRenda(salario));

/* QUESTÃO 7*/

function calcularMediaArredondada(lista){
    var soma = 0;
    for(i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    media = soma / lista.length;
    return parseInt(media);
}
lista = [1, 4, 12, 6, 4];
console.log("A média arredondada é =", calcularMediaArredondada(lista));

/* QUESTÃO 8*/

function calcularDigitosParesImpares(num){
    let pares = 0;
    let impares = 0;
    for (i = 1; i <= num; i++){
        if(i % 2 == 0){
            pares++;
        }else{
            impares++;
        }
    }
    return [pares, impares];
}

num = 11;
console.log("Quantidade de números pares e ímpares =", calcularDigitosParesImpares(num));

/* QUESTÃO 9*/

function calcularMediaAlunos(alunos){
    if (alunos.length == 0){
        return 0;
    }
    let soma = 0;

    for (let aluno of alunos){
        soma += aluno.nota;
    }
    let media = soma / alunos.length;
    return parseFloat(media.toFixed(2));
}

const alunos = [
    { nome: "Paulo", nota: 6.5 },
    { nome: "Fernando", nota: 7.0 },
    { nome: "Veronica", nota: 8.5 },
    { nome: "Carla", nota: 9.0 },
];
console.log("A média dos alunos é:", calcularMediaAlunos(alunos));

/* QUESTÃO 10*/

function calcularIdade(anoNascimento){
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    return idade;
}
anoNascimento = 1978;
console.log("A idade é:", calcularIdade(anoNascimento));

/* QUESTÃO 11*/

function gerarTabuada(numero){
    for(let i = 1; i <= 10; i++){
       console.log(numero, "x", i, "=", numero * i);
    }
    
}

numero = 5;
gerarTabuada(numero);

/* QUESTÃO 12*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function advinheNumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;

  console.log("Tente adivinhar um número entre 1 e 100. Você tem 3 tentativas");

  function pedirTentativa() {
    rl.question("Tentativa ${tentativas + 1}: Digite um número entre 1 e 100: ", (resposta) => {
      const tentativa = parseInt(resposta);
      tentativas++;

      if (isNaN(tentativa)) {
        console.log("Por favor, insira um número válido.");
        tentativas--; 
        pedirTentativa();
      } else if (tentativa === numeroSecreto) {
        console.log("Parabéns! Você acertou em ${tentativas} tentativa(s)!");
        rl.close();
      } else if (tentativa < numeroSecreto) {
        console.log("Errado! Tente novamente com um número maior.");
        if (tentativas < 3) pedirTentativa();
        else {
          console.log("Suas 3 tentativas acabaram! O número era ${numeroSecreto}.");
          rl.close();
        }
      } else if (tentativa > numeroSecreto) {
        console.log("Errado! Tente novamente com um número menor.");
        if (tentativas < 3) pedirTentativa();
        else {
          console.log("Suas 3 tentativas acabaram! O número era ${numeroSecreto}.");
          rl.close();
        }
      }
    });
  }

  pedirTentativa();
}

advinheNumero();

/* QUESTÃO 13*/

function verificarPropriedade(obj, prop) {
    if (obj[prop] !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  const make = {
    marca: "MM",
   qnt_produto: 2005,
  };
  
  console.log(verificarPropriedade(make, "marca"));
  console.log(verificarPropriedade(make, "cor"));
  console.log(verificarPropriedade(make, "qnt_produto"));

/* QUESTÃO 14*/

function calcularPreçoProduto(preço, lucro, frete){
    let preçoFinal = preço + (preço * (lucro / 100)) + frete;
    return parseFloat(preçoFinal.toFixed(2));
}

preço = 140;
lucro = 40;
frete = 5;
console.log("O preço final do produto: R$", calcularPreçoProduto(preço, lucro, frete));

/* QUESTÃO 15*/

function palavraMaisLonga(palavra){
    palavra = palavra.split(" ");
    let maior = palavra[0];
    for(i = 0; i < palavra.length; i++){
        if(palavra[i].length > maior.length){
            maior = palavra[i];
        }
    }
    return maior;
}

palavra = "desenvolvimento de um site";
console.log("A palavra mais longa é:", palavraMaisLonga(palavra));

/* QUESTÃO 16*/

function imprimeEmQuadro(lista) {
    const largura = Math.max(...lista.map(str => str.length));
    const borda = '*'.repeat(largura + 4);
  
    console.log(borda);
    for (const str of lista) {
      console.log(* ${str.padEnd(largura)} *);
    }
    console.log(borda);
  }

  imprimeEmQuadro(["Hello", "World", "in", "a", "frame"]);

/* QUESTÃO 17*/

function array(string){
    letras = []
    for(i=0; i<string.length; i++){
        if (string[i].length > 5) {
            letras += string[i]
            if (i < string.length -1){
              letras += ", "
            }
        } else {
            continue;
        }
    }
    if(letras.length == 0){
      return 0;
    }else{
      return letras
    }
}

string = ["agua", "leite", "suco", "refrigerante", "achocolatado"];
console.log("Palavras que possuem mais de 5 letras:", array(string))

/* QUESTÃO 18*/

function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
  }
  
  const livros = [
    { titulo: "Os três porquinhos", autor: "Autor X", ano: 2000 },
    { titulo: "Cinderela", autor: "Autor Y", ano: 2001 },
    { titulo: "Branca de neve", autor: "Autor X", ano: 1994 }
  ];
  
  console.log(filtrarLivrosPorAutor(livros, "Autor X"));

/* QUESTÃO 19*/

function encontrarPessoaMaisVelha(pessoas) {
    if (pessoas.length === 0) return null;
    
    let maisVelha = pessoas[0];
  
    for (let pessoa of pessoas) {
      if (pessoa.idade > maisVelha.idade) {
        maisVelha = pessoa;
      }
    }
  
    return maisVelha.nome;
  }
  

  const pessoas = [
    { nome: "Paulo", idade: 33 },
    { nome: "Carla", idade: 65 },
    { nome: "Amanda", idade: 40 }
  ];
  
  console.log(encontrarPessoaMaisVelha(pessoas)); 

/* QUESTÃO 20*/

function filtrarCarrosPorAno(carros, anoMinimo) {
  return carros.filter(carro => carro.ano > anoMinimo);
}

const carros = [
  { marca: "Toyota", modelo: "Corolla", ano: 1998 },
  { marca: "Honda", modelo: "Civic", ano: 2008 },
  { marca: "Ford", modelo: "Focus", ano: 2015 }
];

console.log(filtrarCarrosPorAno(carros, 2000));

/* QUESTÃO 21*/

function inverterString(str) {
  return str.split("").reverse().join("");
}

console.log(inverterString("Grazielly"));

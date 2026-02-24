var a = 5;
var b = 2;

//operações matemáticas
var soma = a + b;
console.log("O resultado da soma é: " + soma);

var subtracao = 42 - b;
console.log("O resultado da subtração é: " + subtracao);

var multiplicacao = a * b;
console.log("O resultado da multiplicação é: " + multiplicacao);

var divisao = a / b;
console.log("O resultado da divisão é: " + divisao);

//modulo - resto de divisão não exata (%)
var modulo = a % b;
console.log("O resto da divisão é: " + modulo);

//negação ou inversão - tornar um número negativo
var negativo = -a;
console.log("o negativo de 5 é: " + negativo);

//potenciação
var potencia = a ** b;
console.log("5 elevado a 2 é: " + potencia);

//incremento - soma 1 a uma var
var incremento = 5
incremento ++;
console.log("incremento de 1 a 5 temos: " +incremento);

//decremento - diminui 1 da var
var decremento = 5;
decremento --;
console.log("decrementando 1 de 5 temos: " + decremento);

//comparação - retorna T ou F
var igual = "Ana" == "ana";
console.log(igual);

var diferente = "Ana" != "ana";
console.log(diferente);

var maiorq = 3 > 2;
console.log(maiorq);

var maiorig = 3 >= 2;
console.log(maiorig);

var menorq = 3 < 2;
console.log(menorq);

var menorig = 3 <= 2;
console.log(menorig);

//verificar a idade do usuário para filme com classificação de 16 anos
var idade = 18;
if (idade >= 16) {
    console.log("Venda permitida");
}


//operadores lógicos - ou (||) 
// let ouA = true || true; // retorna true
// let ouB = true || false; // retorna true
// let ouC = false || true; // retorna true
// let ouD = false || false; // retorna false 

//festa na piscina, vai comprar sorvete?
// if(estaSol || amigosQueremSorvete) {
//    "Comprar sorvete";
// }

//operadore slogicos - e (&&)
// let eA = true && true; // retorna true
// let eB = true && false; // retorna false
// let eC = false && true; // retorna false
//let eD = false && false; // retorna false

//compra ingressos filme de terror
//if(maiorDeIdade && ingressosComprados) {
//     "Deixar o cliente entrar";
// }

//não (!) - quer que o retorno seja falso para continuar
//let !naoA = true; - retorna false
//let !naoB = false; - retorna true

//envio de notificações
// if(!notificacoesHabilitadas) {
//     "Não enviar notificações";
// }

//operadores em conjunto
// if(!notificacoesHabilitadas && !sonsAtivados) {
//     "Não enviar notificações"
// }

// if(!notificacoesHabilitadas || !sonsAtivados) {
//     "sons estão desativados"
// }

//saber se um personagem no jogo tem energia
// if(!energia) {
//    "game over"
// }

//condicionais
let chuva = true;

if(chuva) {
    console.log("Leve um guarda chuva")
} else {
    console.log("Aproveite o dia")
}

//site
let usuarioCadastrado = true;

if(usuarioCadastrado) {
    console.log("Digite seu login e senha")
} else {
    console.log("Realize seu cadastro")
}

//e-comerce
//if(compra >= 100) {
//    aplicarDescondo(10);
//}

//loop for - numero definido de vezes
for(let i = 1; i <= 5; i++) {
    console.log("isso é um loop");
}

for(let i = 1; i <= 5; i++) {
    console.log("isso é um loop" + i);
}

//while - loop executado enquanto algo estiver acontecendo
let numero = 1

while(numero <= 5) {
    console.log("Repetindo");
    numero++;
}

while(numero <=5) {
    console.log("repetindo" + numero);
    numero++;
}

//funcoes
function minhaFuncao() {
    console.log("Minha função");
}
minhaFuncao();

function somar(a, b) {
    console.log(a + b);
}
somar(1, 2);

//funcao com loop
function contarAteDez() {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
contarAteDez();

//funcao com string
function unirNomes(nome1, nome2) {
    console.log(nome1 + " e " + nome2);
}
unirNomes("Maria", "João");

//constantes
const diasDaSemana = 7;
console.log("a semana tem " + diasDaSemana + " dias");

//adicionar o mesmo sobrenome para varios nomes
const sobrenome = "Ferreira";
console.log("Maria " + sobrenome);
console.log("João " + sobrenome);
console.log("Thiago " + sobrenome);

//arrays
let nomes = ["André", "Thiago", "Maria", "João"];
console.log(nomes);

//remover item
nomes.pop();
console.log(nomes);

//adicionar item
nomes.push("Carla");
console.log(nomes);

//colocar em ordem alfabetica
nomes.sort();
console.log(nomes);

//objetos - uma informação com utras informações dentro
let contato = {nome: 'João', tel: '12345678', email: 'joao@joao.com'};
console.log(contato.nome);

//adicionar um campo
contato.endereco = "rua da minha casa, 1";
console.log(contato.endereco);
console.log(contato);

//remover um campo
delete contato.tel;
console.log(contato);

//weak typing
console.log(1 + "7");

//typeof
let estaChovendo = false;
console.log(typeof estaChovendo);

//numero e flutuantes
let numero1 = 2.5;
console.log(typeof numero1);

//bigint
let numeroGrande = 92617846387649823746343546543245676n;
console.log(typeof numeroGrande);

//dado nao preenchido - null
let usuario = {
    name: "João",
    sobrenome: null
}
console.log(usuario.sobrenome);
console.log(usuario.idade);

//quebrando linhas em string
console.log("Olá, \nmundo!");

//exibir aspas na string
console.log("\"Olá, mundo!\"");

//symbol - chave de propriedades dentro de objetos
let eMail = Symbol();
usuario[eMail] = "joao@joao.com";
console.log(usuario[eMail]);
console.log(usuario);

//objetos - tem varias chaves e cada chave tem seu valor (form)
const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    genero: "Ficção"
};
console.log(livro.titulo);

//funcoes sao objetos
function saudacao() {
    console.log("Olá!");
}
saudacao()

//propriedade na funcao
saudacao.idioma = "Português";
console.log(saudacao.idioma
);

//concatenação de strings
console.log("o idioma da saudação está em " + saudacao.idioma + "!");

//concatenação sem + ""
console.log(`o livro ${livro.titulo}, escrito por ${livro.autor} foi publicado em ${livro.ano}.`);

//array
const filmes = ["titanis", "vingadores", "matrix"];
console.log(filmes);
console.log(filmes[1]);

//foreach
const arr = ['uva', 'banana', 'abacaxi', 'pera'];
arr.forEach(function(item, index) {
    console.log(index, item);
});

//map
listaCompras = arr.map(function(){
    return "comprado";
});
console.log(listaCompras)

listaCompras2 = arr.map(function(item) {
    if(item === 'abacaxi') {
        return "comprado";
    }
    return item;
});
console.log(listaCompras2);

//operadores logicos e condicionais 
// só vai fazer a compra se tiver desconto ou frete gratis
let temDesconto = true;
let freteGratis = false;
console.log(`Tem desconto: ${temDesconto} \nTem frete grátis: ${freteGratis}`);

//operador de igualdade
//comparacao fraca 
console.log("5" == 5);
//comparacao forte
console.log("5" === 5);
//converter string em numero - casting
//console.log(number("5") == 5); - nao funcionou

//e &&
if(temDesconto && freteGratis) {
    console.log("Vou comprar");
} console.log("Vou esperar");

//ou ||
if(temDesconto || freteGratis) {
    console.log("Acho que vou comprar");
} else {
    console.log("Não está valendo a pena");
}

//nao !
if(!freteGratis) {
    console.log("Vou ter que pagar o frete");
} else {
    console.log("Frete grátis, que bom!");
}

//misturando tudo
let vontadeComprar = true;

if(temDesconto && freteGratis && vontadeComprar) {
    console.log("vou comprar com certeza");
} else if(temDesconto || freteGratis || vontadeComprar) {
    console.log("acho que vou comprar");
} else {
    console.log("deixa pra la");
};

//for
const produtos = ['camiseta', 'tenis', 'calça', 'boné'];

for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

//while
let number = 0;
while(number < 5) {
    console.log("numero:", number);
    number++;
}

const estoque = [5, 3, 6, 4];
let i = 0;
while(i < produtos.length) {
    console.log(`${produtos[i]} - ${estoque[i]} unidades`);
    i++;
}

//break
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
};

//funcao
function dizerOla() {
    console.log("Olá, dev");
}
dizerOla();

function cumprimentar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}`);
}
cumprimentar("Isabelle", "Albuquerque");

function dobrar(numero) {
    return numero * 2;
};
const resultado = dobrar(numero);
console.log(resultado);

//high order functions - funcoes que usam outras funcoes como argumento
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function(numeros) {
    return numeros * 2;
})
console.log(dobrados);

//arrow functions - criar funcoes rapido
//funcao soma tradicional
function somaTradicional(x, y) {
    return x + y;
}
const resultadoSoma = somaTradicional(2, 2);
console.log(resultadoSoma);
//arrow
const somaArrow = (z, g) => z + g;
console.log(somaArrow(2, 2));

//map e arrow functions
const triplicar = numeros.map(numeros => numeros * 3);
console.log(triplicar);

//selecao tag com query 
const h1 = document.querySelector('h1');
console.log(h1);

//diferenca let e var 
function exemplo() {
    if(true) {
        var variavelVar = "sou uma variável var";
        let variavelLet = "sou uma variavel let";
        console.log(variavelLet);
    }
    console.log(variavelVar);
}
exemplo()

//selecionar elemento por id
console.log(document.getElementById("titulo").textContent);

//selecionar elemento pelo nome da tag
let tagHtml = document.getElementsByTagName("p");
console.log(tagHtml[0].textContent);

//selecionar elemento por classe
let elementosPorClasse = document.getElementsByClassName("destaque");
console.log(elementosPorClasse[1].textContent);

//selecionar o primeiro elemento com uma classe
console.log(document.querySelector(".destaque").textContent);

//selecionar todos os elementos da mesma classe
let destaques = document.querySelectorAll(".destaque");
destaques.forEach(item => console.log(item.textContent));

//criar um alerta ao receber uma acao de clique do usuario
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("botao clicado");
});

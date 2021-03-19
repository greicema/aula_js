/*var nome = "Greice Mara";
var idade = 23;
var idade2 = 10;
var frase = "Olaria é o melhor time do mundo";
var lista = ["maçã", "pera", "laranja"];
var fruta = { nome: "maçã", cor: "vermelha" } //funciona como um dicionário
    //alert(nome + ' tem ' + idade + ' anos');
    //alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Olaria", "Inter de Limeira")); //O comando replace troca uma palavra por outra
console.log(lista.reverse()); //traz os elementos de um array de trás para frente
console.log(lista.join(" - ")); //acrescenta algo à lista
console.log(fruta);

//var quantosAnos = prompt("Qual sua idade?"); //prompt é um comando de entrada
if (quantosAnos >= 18) {
    //alert("Maior de idade");
} else {
    //alert("Menor de idade");
}

var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1; //count++;
};
//mesma coisa que o count   
var count2;
for (count2 = 0; count2 <= 5; count2++) {
    console.log(count2);
};
var d = new Date(); //data
//alert(d.getDay());
*/
/*function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

//alert(soma(5, 10));

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://writeandimprove.com/workbooks#/wi-workbooks"); //abre um link em uma nova aba
    window.location.href = "https://writeandimprove.com/workbooks#/wi-workbooks"; //abre um link na mesma aba
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}

function load() {
    //alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
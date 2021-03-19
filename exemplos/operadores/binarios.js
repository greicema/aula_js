//in
something in somethingItems

//Arrays
var arvores = new Array('Pau-Brasil', 'Loureiro', 'Cedro', 'Carvalho', 'Sicômoro');
0 in arvores; //Retorna true
3 in arvores; //Retorna true
6 in arvores; //Retorna false
"Cedro" in arvores; //Retorna false (é preciso especificar o número do índice, não o valor naquele índice(a posição no array))
"length" in arvores; //Retorna true

//Objetos predefinidos
"PI" in Math; //Retorna true
var minhaString = new String('coral');
'length' in minhaString; //Retorna true

//Objetos personalizados
var meucarro = { marca: 'Honda', modelo: 'Accord', ano: 1998 };
"marca" in meucarro; //Retorna true
"modelo" in meucarro; //Retorna true

//instanceof
objeto instanceof tipoObjeto
var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //Code here
}
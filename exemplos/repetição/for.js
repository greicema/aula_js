/*
for([expressaoInicial]/ [condicao]; [incremento])
declaracao
*/

const array = ['one', 'two', 'three'];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("Element", i, ':', element);
}
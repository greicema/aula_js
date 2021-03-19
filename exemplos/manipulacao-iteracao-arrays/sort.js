const arr = [1, 5, 4, 3, 2];
//Array
console.log("Array", arr);

//Array organizado em ordem crescente
arr.sort((a, b) => { return a - b });
console.log("Array em ordem crescente", arr);

//Array organizado em ordem decrescente
arr.sort(function(a, b) { return b - a });
console.log("Array em ordem decrescente", arr);
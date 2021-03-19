const arr = [1, 2, 3, 4, 5];

var arr2 = arr.reduce((total, value) => total += value, 0); //15
console.log(arr2);
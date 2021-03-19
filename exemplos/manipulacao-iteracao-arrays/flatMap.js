const arr = [1, 2, 3, 4];

var arr2 = arr.flatMap(value => [value * 2]);
console.log(arr2);

var arr3 = arr.flatMap(value => [
    [value * 2]
]);
console.log(arr3);
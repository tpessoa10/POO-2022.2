const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let par = (x) => x % 2 == 0

let pares = array.filter(par)

console.log(pares)
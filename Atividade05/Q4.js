function numeros() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var exibir = function (item, i) {
        console.log(nums[i]);
        console.log('-');
    };
    nums.forEach(function (item, i) {
        exibir(item, i);
    });
}
console.log(numeros(1, 2, 3, 4, 5, 6));

// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)

//filter
Array.prototype.filtero = function (callback, context) {
    let arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

let  numbers = [1, 20, 30, 80, 2, 9, 3];
let  newNum = numbers.myFilter(function (n) {
    return n >= 10;
});
console.log(newNum);
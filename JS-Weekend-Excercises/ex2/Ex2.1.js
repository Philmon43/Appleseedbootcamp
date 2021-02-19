// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumOftwoLowestNumer = (arr) => {
    let lowest = 0;
    for(let i =0;i<2;i++){
         lowest+=parseInt(arr.splice(arr.indexOf(Math.min(...arr)), 1));
    }
    return lowest
}

console.log(sumOftwoLowestNumer([1, 2, 100, 200]));
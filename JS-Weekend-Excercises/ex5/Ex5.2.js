// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeat_str = (n, str, idx=1) => {
    if(idx == n || n < idx) return str
    return str+repeat_str(n-idx, str, idx=+1);
};

console.log(repeat_str(6 ,"I"))
console.log(repeat_str(5 ,"hello"))
// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (str, idx = 0) => {
    if (str.length == idx || !/^[a-zA-Z]*$/.test(str)) {
        return ""
    }
    return " "+str[idx].toUpperCase()+str[idx].repeat(idx) + accum(str, idx+=1).replace(" ", "-");
}

console.log(accum("abcdefghijklmnopqrstuvwxyz"));
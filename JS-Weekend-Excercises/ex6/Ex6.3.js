// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

const longest = (s1, s2) => {
    return [...s1, ...s2]
        .sort()
        .reduce((a, b) => {
            if (!a.includes(b)) {
                return a + b
            }
            return a
        }, "")
}


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
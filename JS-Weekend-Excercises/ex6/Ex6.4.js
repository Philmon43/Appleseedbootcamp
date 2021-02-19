// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
    let repteated = ''
    for (let i = 0; i < str.length; i++) {
        if (repteated.includes(str[i].toLowerCase())) {
            return false
        } else {
            repteated += str[i]
        }

        // console.log(repteated)
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


const toCamelCase = (str) => {
    if (str == "") {
        return ""
    }
    const arr = str.split(/-|_/);
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let [first, ...rest] = arr[i].split("")
        result += (first.toUpperCase() + rest.join(""))
    }
    return result
}

console.log(toCamelCase("the_stealth_warrior"))
// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const longesttWord = (str) => {
    return str.split(" ").reduce((a, b) => a.length > b.length ? a : b).length
}

console.log(longesttWord("hello this is the longest word"));
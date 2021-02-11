const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (array) => {
  const joinArray = array.join("").toLowerCase().split("");
  const letters = {};

  for (let i = 0; i < joinArray.length; i++) {
    if (joinArray[i] === " ") {
      continue;
    }
    // if (letters[joinArray[i]]) {
    //   letters[joinArray[i]] = letters[joinArray[i]] + 1;
    // } else {
    //   letters[joinArray[i]] = 1;
    // }
    letters[joinArray[i]] = letters[joinArray[i]] + 1 || 1;
  }
  const highestLetter = Object.keys(letters).sort((a, b) => {
    return letters[b] - letters[a];
  });

  return [letters, highestLetter[0]];
};
countLetters(array);

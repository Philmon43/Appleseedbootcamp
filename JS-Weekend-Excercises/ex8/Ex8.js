// Ex 8 - Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// f ➞ 26
// indPerimeter(6, 7)
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
// Notes
// ● Don't forget to return the result.
// ● If you're stuck, find help in the Resources tab.
// ● If you're really stuck, find solutions in the Solutions tab.

//P=2(l+w)

const findParameter = (l, w) => {
    return 2*(l+w)
}

console.log(findParameter(20, 10));
console.log(findParameter(2, 9));
const yesOrNo = (bool) => {
    return bool&&"Yes" || "No"
}

console.log(yesOrNo(true));
console.log(yesOrNo(false));
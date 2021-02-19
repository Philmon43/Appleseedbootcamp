// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const unqueNumber = (uniqe) => {
   for(let i=0;i<uniqe.length;i++){
       for(let x = 0; x<uniqe.length;x++){
        if(uniqe[x] != uniqe[i]) return uniqe[x]
       }
   }
}

console.log(unqueNumber([ 1, 1, 1, 2, 1, 1 ]))
console.log(unqueNumber([ 0, 0, 0.55, 0, 0 ]))
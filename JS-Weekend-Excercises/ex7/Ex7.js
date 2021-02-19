// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)


//test

let arr = [1, 2, 3, 4, 5];
//filter

let filter = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 4){
        filter.push(arr[i])
    }
}
console.log(filter)

//foreach
for(let i = 0; i < arr.length; i++){
   console.log(arr[i])
}

//map
let map = []
for(let i = 0; i < arr.length; i++){
    map.push(arr[i]+arr[i])
 }
 console.log(map)
// const arr=[1,2,3,4,5,6,"hare"]
// console.log (arr[6])
//methods
// arr.push(100)
// console.log (arr)
// arr.pop()
// console.log (arr)
// console.log (arr.includes(5))
// console.log (arr.indexOf(18))

// console.log (arr.unshift(25))
// console.log (arr.shift())


// console.log (arr.slice(1,4))
// console.log (arr.splice(1,4,5,8,9,6))
// console.log(arr)




const mcu = ["thos","ironman","hhulk","spiderman","loki"]
const dc = ["batman","superman","flash"]
//mcu.push(dc) //push dc array into the mcu array as a last index like this ['thos','ironman','hhulk','spiderman','loki',[ 'batman', 'superman', 'flash' ]
//console.log (mcu[5])
const both = mcu.concat(dc)
console.log (both)
const allheros = [...mcu, ...dc]   //it is called spread operator it works like concatinatio
console.log (allheros)

console.log (Array.isArray("Harekrushna"))
console.log (Array.from("Harekrushna"))
console.log (Array.from({name: "Harekrushna"}))
let s1="hare"
let s2="krushna"
let s3="pradhan"
console.log (Array.of(s1,s2,s3))
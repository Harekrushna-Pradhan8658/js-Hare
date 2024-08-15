
//object literals
// const mysym = Symbol("key")
// const user = {
//     name:"Harekrushna",
//     "Fullname":"Harekrushna Pradhan",
//     [mysym]:"key",
//     age:22,
//     location:"gunupur",
//     email:"harekrushna@gmail.com",
//     IsLoggedIn:false,
//     LastLoginDays: ["monday","saturday"]
// }
// console.log (user["Fullname"])
// console.log (user["email"])
// console.log (user.Fullname)
// console.log (user[mysym])
// user.age=15
// console.log (user)
// Object.freeze(user)
// user.age=22
// console.log (user)

// user.greeting = function(){
//     console.log (`hello user`)
// }
// user.greeting2 = function(){
//     console.log (`hello user, ${this.Fullname}`)
// }
// console.log (user.greeting())
// console.log (user.greeting2())




//OBJECT SINGLETON
// const user = new Object()
const user ={}
user.id="123hare"
user.name="kriss"
user.islogin=false
console.log (user)

// const userdet = {
//     email : "some@gmail.com",
//     fullname : {
//         name : "hare",
//         userfullname : {
//             firstname : "Harekrushna",
//             lastname : "pradhan"
//         }
//     }
// }
// console.log (userdet.fullname.userfullname.firstname)

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj4 = {5:"c",6:"d"}
// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({},obj1,obj2,obj4)
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log (obj3)
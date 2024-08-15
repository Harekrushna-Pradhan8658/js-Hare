//singleton


//object literals
const mysym = Symbol("key")
const user = {
    name:"Harekrushna",
    "Fullname":"Harekrushna Pradhan",
    [mysym]:"key",
    age:22,
    location:"gunupur",
    email:"harekrushna@gmail.com",
    IsLoggedIn:false,
    LastLoginDays: ["monday","saturday"]
}
console.log (user["Fullname"])
console.log (user["email"])
console.log (user.Fullname)
console.log (user[mysym])
user.age=15
console.log (user)
Object.freeze(user)
user.age=22
console.log (user)
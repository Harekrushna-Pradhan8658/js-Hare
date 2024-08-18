// function add (n1,n2){
//     console.log (n1+n2)
// }
// add(2,5)



// function calculateCartPrice (...num){
//     return num
// }
// console.log (calculateCartPrice(100,200,300,400))


// if (true){
//     let a=20
//     const b=30
//     var c=40

// }
// // console.log (a)
// // console.log (b)
// console.log (c)

// function one (){
//     const username = "hare"
//     function two(){
//         const website = "insta"
//         console.log (username)
//     }
//     // console.log (website)
//     two()
// }
// one()



const chai = () => {
    let username ="hare"
    console.log (this.username)
}

// chai()

//AERROW FUNCTION
// const addtwo = (n1,n2) => {
//     return n1+n2;
// }

// const addtwo = (n1,n2) =>  n1+n2
// const addtwo = (n1,n2) =>  (n1+n2)             //implicit return
// const addtwo = (n1,n2) =>  ({username:"hare"}) 

// console.log (addtwo(2,5))



//Immmediately Invoked Function Expressions (IIFE)
(function chai(){      //named IIFE
    console.log ("db connection")
})();

( (name) => {          //unnamed IIFE
    console.log (`db connected ${name}`)
})("hare");
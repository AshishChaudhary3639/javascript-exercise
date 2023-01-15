//1
// let data=new Set([1,1,2,3,4])
// console.log(typeof data)

//2
// let data=["Peter","Ashish","Sam"]
// let [,,y]=data;
// console.log(y)

//3
// let names="ashish"
// function getName(){
//     console.log(names)
//     names="chaudhary"
// }

// getName()
// getName()

//4
// console.log(`${(x=>x)("I love")} to program`)

//5 
// console.log(myName)
// var myName="ashish"

//6
// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

//7
// console.log(!"")
// console.log(typeof("ashish"))

//8 
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"2"))

// console.log(1+"2")
// console.log("1"+2)

//9
// let input="ashish"
// let str=[...input.trim()]
// console.log(str)

//10

function getName(person){
    person.name="Ashish"
}
const person={name:"Bhaskar"}
getName(person)
console.log(person)
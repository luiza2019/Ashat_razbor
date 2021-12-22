// ! OOP

// class User {
//     constructor(name, password, type){
//         this.name = name
//         this.password = password
//         this.type = type
//     }
// }
// let admin1 = new User("Asan","123456789","admin");
// let user1 = new User("Aktan", "qwerty", "user")
// console.log(admin1)
// console.log(user1)
// class Car {
//     constructor(brand, type, price){
// this.brand = brand
// this.type = type
// this.price = price
//     }
// }

// class Mercedes extends Car {
//     constructor(brand, type, price, year, color){
//         super(brand,type,price)
//         this.year= year
//         this.color = color
//     }
// }

// let carMerc = new Mercedes("Mercedes", "Coupe", "15000", '2005', 'black')
// console.log(carMerc)

// class Account {
//     constructor(name, password){
//         this.name = name
//         this.#password = password
//     }
//     #password
//     getPassword(){
//         return this.#password
//     }
// setNewPassword(newPassword){
//     this.#password = newPassword;
// }
// }
// let account1 = new Account("Ilyas", "qwerty")
// console.log(account1)
// account1.setNewPassword("JSFS13")
// console.log(account1.getPassword())

// class Dog {
//     constructor(name){
//         this.name = name;
//     }
//     voice(){
//         console.log("Gav Gav")
//     }
// }

// class Cat{
//     constructor(name){
//         this.name = name;
//     }
//     voice(){
//         console.log("Miu Mau Mu")
//     }
// }

// let deny = new Dog("Deny")
// let Gur = new Cat("Gur")
// deny.voice()
// Gur.voice()

// let span = document.querySelector("span")
// span.addEventListener("click", (e) => {
//     console.log(e.target, e.currentTarget)
//     e.stopPropagation()
// })
































// let person1 = {
//     name:'John',
//     lastName: 'Snow',
//     age: 29,
//     sayHello(){
    //     }
    // }
    // console.log(person1)
    // person1.sayHello()
    
//     function Person(name, lastName, age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//     }
//     Person.prototype.sayHello = function(){
//             console.log(`Hello! My name is ${this.name} ${this.lastName}`)

// }
// Person.prototype.sayAge = function(){
//     console.log(`I am ${this.age} y.o.`)
// }
// let person1 = new Person('John', 'Snow' , 29);
// let person2 = new Person('Emily', 'Brown', 19)
// console.log(person1)
// person1.sayHello()
// console.log(person2)
// person2.sayAge()

// writeHtml("Hello, I am progger")
// function writeHtml(text) {
//     console.log(text);
// }
// writeHtml("Good morning");

// let sum = function (num1, num2) {
//     console.log(num1, num2)
//     let result = num1 + num2
//     console.log(result)
// };
// sum(43, 7);

// let multy = (num1, num2, num3) => {
//     console.log(num1, num2, num3);
//     let result = num1 * num2 * num3;
//     return result;
// }
// let newNum = multy(5, 10, 2)
// console.log(newNum);

// let multy = (num1, num2, num3) => num1 * num2 * num3;
// let result = multy(2, 3, 4)
// console.log(result);

// короткий вариант

// function perimetr(a, b){
//     return (a + b) * 2
// }
// let result = perimetr(5, 10) + 10;
// console.log(result)

// function func(arg1, framework) {
//     console.log(arg1);
//     return function(arg2) {
//         // console.log("Язык программирования " + arg1 + " framework + ' и ' + arg2);

//         console.log(`Язык програмирования ${arg1} ${framework} и ${arg2}`);
//     };

// }
// let newFunk = func("Java", "Mobile");
// newFunk("Python");
// newFunk("C++");

// function fact(num){
//     if(num <= 1) return 1
//     return num * fact(num -1);
// }
// console.log(fact(5))

// let product = {
//     title: "Adidas ball",
//     size: 4,
//     price: 100,
//     getSize() {
//         console.log(this.size)
//     },
//     setSize(newSize){
//         this.size = newSize;
//     },
//     getPrice: () => {
//         console.log(this)
//     },
//     setTitle(newTitle){
//         this.title = newTitle
//     }
// }
// console.log(product)
// product.getSize();
// product.setSize(6)
// console.log(product)
// product.getPrice()
// product.setTitle("Nike")
// console.log(product)

// let elevator = {
//     minFloor: 1,
//     maxFloor: 16,
//     currentFloor: 1,
//     printFloor() {
//         console.log(this.currentFloor);
//     },
//     upOneFloor() {
//         if (this.currentFloor < this.maxFloor) {
//             this.currentFloor++;
//             this.printFloor()
//         } else {
//             alert("вы достигли максимального этажа");
//         }
//     },
//     downOneFloor() {
//         if (this.currentfloor > this.minFloor) {
//             this.currentFloor--;
//             this.printFloor()
//         } else {
//             alert("вы достигли минимального этажа")
//         }
//     },
//     toFloor(floor) {
//         if (floor <= 16 && floor >= 1) {
//             while (this.currentFloor !== floor) {
//                 this.currentFloor > floor ? this.downOneFloor() : this.upOneFloor()
//             }
//         }
//         else {
//             alert("такого этажа не существует")
//         }
//     },
// };
// elevator.printFloor()
// elevator.upOneFloor()
// elevator.downOneFloor()
// // elevator.downOneFloor()
// elevator.toFloor(14)
// elevator.toFloor(5)

// function generatePassword(){
//     let length = 8
//     let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*("
//     let password = "";
//     let charsetLength = charset.length;
//     for(let i = 0; i < length; i++){
//         password += charset[Math.ceil(Math.random() * charsetLength)];
        
//     }
//     return password;
// }
// let password = generatePassword()
// console.log(password)

// let arr = [[[5], 3], 0, ['test']];
// function countNumbers(array){
//     if(array.length === 0) return 0
//     let total = 0
//     let first = array.shift()
//     if(Array.isArray(first)) {
//         total += countNumbers(first)
//     } else if(Number.isInteger(first)){
//         total += 1
//     }
//     return total + countNumbers(array)
// }
// console.log(countNumbers(arr));


// if(result > 23 && result < 40){
//     console.log("hello")

// }else {
//     console.log("Goodbye")
// }




































// стрелочные функции

// const arrowFunc = () => {
//     console.log("Arrow")

// };

// const arrowFunc = () => console.log("Arrow");// return сразу включен

// const arrowFunc = arg => console.log(arg)
// arrowFunc(10);

// function func(){
//     console.log(...arguments)
// }

// const func = () = => { // в стрелочной функции нет встроенной arguments
//     console.log(arguments)
// }
// func("str", 10, true)

// let km = +prompt('Enter km')
// const converter = (arg) => {
// let m = arg * 1000;
// alert(`${m} м`)
// }
// converter(km)


// методы обьектов
// console.warn("method")
// console.error("чп")
// console.log("LOG")


// let user = {
//     name: 'Ilyas',
//     sayHello: function(arg){ // function expression
//         console.log(`Hello ${arg}`)
//     },
//     sayHello(arg){ // function decleration
//         console.log(`Hello ${arg}`)
//     },
//     sayHello: (arg) => { // arrow function
//         console.log(`Hello ${arg}`)
//     },
// };
// user.sayHello("Damir")
// user.sayHello("Islam")

// this - это контекст
// let room = 19;
// function sum(arg){}

// console.log(this)

// let obj = {
//     title: "JS77",
//     sayContext(){
//         console.log(this);
//     },
//     sayContextArrow: () => {
//         console.log(this);
//     },
//     func(){
//         let arrowFunc = () => {
//             console.log(this);
//         };
//         arrowFunc();
//     },
// };
// obj.sayContext()
// obj.sayContextArrow()
// obj.func();

// let user = {
//     name: "Erlan",
//     sayName: function(){
//         console.log(this.name)
//     },
// };
// let newUser = {...user}; // для копирования значений
// newUser.name = ("Islam")
// console.log(newUser)
// user.sayName()
// newUser.sayName()


// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US123456789',
//     baggage: 20,
//     getInfo() {
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this}. Maximum luggage is ${this.baggage}`)
//     },
//     setBaggage(arg){
//         this.baggage = arg;

//     },
// };
// passenger.getInfo();
// passenger.setBaggage(50);
// passenger.getInfo()

// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.


// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     buyTicket(count) {

//             if(this.balance >= 400 * count) {
//                 this.ticket += count;
//                 this.balance -= 400 * count;
//                 console.log(`Вы успешно купили ${count} билетов`)
//             }
//         else{
//             let avaTicket = Math.floor(this.balance / 400);
//             if(avaTicket > 0){
//                 this.balance -= 400 * avaTicket
//                 this.tickets += avaTicket;
//                 console.log(`у Вас недостаточно средств купить ${count} билет(а).Вы успешно купили ${avaTicket} билет(а)`);


//             }else {
//                 alert("у вас недостаточно средств")
//             }
//         };
//     },
//     addToBalance(sum){
//         this.balance += sum;
//         console.log(`Вы успешно пополнили баланс на ${this.sum}`);
//     },
//     showBalance(){
//         console.log(`Вфш баланс ${this.balance} сом`);
//     },
// }
// user.buyTicket(4)
// user.addToBalance(1000);
// user.showBalance()


// console.log('hello')


































// let arrowFunc = () => {
//     console.log('Hello World')
// }

// let arrowFunc = () => console.log('Hello World!')

// let arrowFunc = (arg1, arg2) => {
//     return arg1 + arg2
// }
// console.log(arrowFunc(7,8))
// let arrowFunc = (arg1, arg2) => arg1 + arg2
// console.log(arrowFunc(7,8))
// можно ват так сократить

// let arrowFunc = arg1 => console.log(arg1)
// arrowFunc(5)

// let arrowFunc = (arg1, arg2, arg3) => {
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'makers') -- у стрелочной функции нет аргументов

// мтоды обьектов

// let person = {
//     name:'Jack',
//     age: 23,
//     sayHello(){
//         console.log('Hello world')
//     },
//     sayname: function(){
//         console.log(`My name is ${this.name}`)
//     },
//     sayAge: function(){

//     } console.log(`I'm ${this.age} y.o.`)

// }
// // console.log(person.age)
// // person.sayHello()
// // person.sayname()
// // person.sayAge()
// let person2 ={...person};
// // console.log(person2)
// person2.name = 'Kani'
// person2.age = 22;
// person2.sayname()
// person2.sayAge()


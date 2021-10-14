// let user = {
//     name: "Aisultan",
//     age: 20,
//     languages: {
//         english: "2 level",
//         french: "3 level"
//     }
// };
// let newUser = user; // копировали ссылку
// let newUser = Object.assign({}, user);// создаем новый объект, поверхностное копирование
// let newUser = {...user } // поверхностное копирование (spread  оператор)
// newUser.name = "Aibek";
// newUser.languages.english = "6 level"
// console.log(user)
// console.log(newUser)

// let product = {
//     title: "t-Shirt",
//     price: {
//         s: 3000, 
//         m: 4000, 
//         l: 2000,
//     },
// };

// let newProduct = JSON.parse(JSON.stringify(product))//глубокое копирование
// newProduct.price.s = 10000
// console.log(product)
// console.log(newProduct)
// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(str)
// console.log(obj)
// console.log(product)

//деструктуризация

// let student = {
//     name: "Melis",
//     lastName: "Wei",
// };
    // let name = student.name
    // let lastName = student.lastName;
//     let name = "Sanzhar"
// let {name: studentName, lastName} = student
//     console.log(studentName, lastName)

// let arr = ["true", 10, null, "str", 77, false]
// let boolean = arr[0];
// let [boolean, , type, ...rest] = arr
// console.log(boolean, type, rest)
// let obj = {
//     name: "Market Place",
//     frameworks: ["React","Django Api"],
//     versions:{

//         legacy: [2011, 2012, 2013],
//     }
// }
// let {frameworks: [frontEndFramework]} = obj
// console.log(frontEndFramework)
// let {versions:{legacy: [,year]}} = obj
// console.log(year)
// let {name: projectName} = obj
// console.log(projectName)
// let product = {
//     // title: "Pencil",
//     price: 100
// };
// let {title = "Default title"} = product;
// console.log(title)

// let user = {
//     // name: "John",
//     age: 22,
// };
// let {name = prompt("ваше имя"), age} = user
// console.log(name, age)

// function showNameAndPhone({name, phone}){
    
//     console.log(name,phone)
// }
// let obj = {
//     name: "Shergazy",
//     phone: 77722233
// };
// showNameAndPhone(obj)
// function func([first, second]){
//     console.log(first,second)
    
//     // arg.forEach((item) => {
//     //     console.log(item)
        
//     // });
// }
// func([1,2,3, 4,5])

// function showUser({name = "notName", lastName, age}){
// console.log(name,lastName,age)
// }
// let obj = {
//     // name: "Ishak",
//     lastName: "Boobekov",
//     age: 24
// }
// showUser(obj)
// Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//       title: 'The Hobbit, or There and Back Again',
//       description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//       texts: [ {
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//       } ]
//     }
//    ];
//    let [{texts: [{ISBN}]}] = courseCatalogMetadata
//    console.log(ISBN)

// let arr = [
//     {id: 1},
//     { id: 1},
//     { id: 1},
//     { id: 1},
//     { id: 1},
//     { id: 2},
//     { id: 2},
//     { id: 3},
//     { id: 3},
//     { id: 3},
    
// ];
// function uniq(arg){
// let uniqArr = []
// arg.forEach((item) => {
//     let check = uniqArr.filter(elem => item.id === elem.id)
//     console.log(check)
//     if(check.length === 0){
//         uniqArr.push(item)
//     }
//     // console.log(uniqArr)
// });
// return uniqArr
// }
// let newArr = uniq(arr);
// console.log(newArr)

// let arr = [1,1,1,2,3,3,4,5,5];
// let newArr = [];
// arr.forEach((item) => {
//     let check = newArr.filter((elem) => {
//         console.log("eto elem", elem, "eto item", item)
//         return elem === item
//     });
//     if(check.length === 0){
//         newArr.push(item)
//     }
//     });
//     console.log(newArr)
// let nums = [10, 21, 15, 5]
// let newArr = nums.map((item) => item **2);
// console.log(newArr)

// let student = {
//     name: "Aibek",
//     courses: {
//         javascript: {
//             price: 200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         },
    
//     },
// };
// let {courses: {python: {position}}} = student
// console.log(position)

// let user = {
//     name: "igor",
//     age: 25,
//     friends: ["Ilyas", "kostya"],
//     children: [
//         { name: 'nikolay', age: 3 },
//         { name: 'petr', age: 10 }
//     ],
//     parents: [
//         { name: 'Victor', age: 55 },
//         {
//             name: "Vasilisa", age: 53, friends: {
//                 close: ["Shergazy", "Aleksandra"],
//                 notclose: []
//             }
//         },

//     ],
//     jobs: {
//         frontEnd: {
//             language: "Javascript",
//         },
//         backEnd: {
//             languages: {
//                 java: {
//                     version: 8,
//                     frameworks: {
//                         spring: {
//                             version: 1,
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// // // let {children: [, secondChild]} = user
// // // console.log(secondChild);

// // let {parents: [,{friends:{close:[,women]}}]} = user
// // console.log(women);

// let {jobs: {backEnd: {language: {java: {frameworks:{version}}}}}} = user
// console.log(version)
// calcAge(37)
// function calcAge(age){
//     let days = age * 365
//     console.log(days)
// }
// const calcAge = (age) => {
//     let days = age * 365
//     console.log(days)
// }
// calcAge(20)
// const calcSquare = function(){
//     console.log(arguments)
//     let [firstNum, secondNum] = arguments
//     console.log(firstNum, secondNum)
// }
// calcSquare(3, 5)

// let arr = [-100, 100, 330, -500]
// let newArr = arr.filter((item, index, array) => {
//     return item < 0
// })
// console.log(newArr)

// let gamer = {
//     psevdoName: "Tuda-Suda",
//     games: ["Gta", "Data 2", "CS:GO"],
//     showUserGames(){
//         this.games.forEach((item) => {
//             console.log(item)
//         })
//     }
// }
// gamer.showUserGames()

// let arr = [20, -15, 30];
// let count = 0
// let result = arr.reduce((prevValue, currentValue) => {
//     count++
// return prevValue * currentValue
// },1)
// console.log(count)
// console.log(result)

// function firstFunc(){
//     let str = ""
//     return function(word) {
// return str += word
//     }
// }
// let func = firstFunc()
// console.log(func("Hello"))
// console.log(func(" World"))
// console.log(func("!"))
// let newFunc = firstFunc()
// let str = ""
// function func(word){
//     return str += word;
// }
// console.log(func("hello"))
// console.log(func("world"))
// console.log(func("!"))
// console.log(func("Coding"))
// console.log(func(" is easy"))

// function rec(start) {
//     if(start % 2 !== 0)
//     console.log(start)
//     if(start >= 100) return
//     rec(start + 1)
// }
// rec(1)

// // for (let i = 0; i <= 100; i++){
// //     console.log(i)
// // }
// let i = 0
// while(i <=100){
//     console.log(i)
//     i++
// }

// let i = 101;
// do{
//     console.log(i)
//     i++
// } while(i <= 100)

// console.log(true && true && false || !!true)
// if(!""){
//     console.log("TRUE")
// }
// console.log("10" - 10)

// console.log(typeof NaN)
// let arr = [1,2,3,4,5,6]
// let newArr = arr.filter((item) => {
//     if(item % 2 === 0){
//         return item
//     }
// })
// console.log(newArr)
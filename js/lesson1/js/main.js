// let arr = [1, 2, 3 , 4, 5, 6, 7, 8,9]
// forEach

// arr.forEach((item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
//     console.log(item * 2)
// })

// arr.map((item, index ,array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })
// let newArr = arr.map((item) => {
// return item + 10
// })
// console.log(newArr)
// filter()

// let newArr = arr.filter((item, index, array) => {
// return item > 4
// })
// console.log(newArr)

// let str = 'Ivan, Misha, Andrey, Oleg, Aktan';
// let newStr = str.split(', ')
// let filteredArr = str.split(', ').filter(item =>{
//     // return item.length > 4
//     return /a/gi.test(item)
// })
// console.log(filteredArr)
// console.log(newStr)

// indexOf
// let arr = ['Ivan', 'Misha', 'Andrey', 'Oleg', 'Aktan']
// let index = arr.indexOf('Misha',2);
// console.log(index)
//findIndex()
// let index = arr.findIndex((item, index, array) =>{
//     return item.length === 5
// })
// console.log(index)
// let arr = [
//     {
//         name: 'Ivan'
//     },
//     {
//         name: 'John'
//     },
//     {
//         name: 'Oleg'
//     },
//     {
//         name: 'Aktan'
//     },
//     {
//         name: 'Emily'
//     }
// ]
// console.log(arr.find(item => item.name === 'Oleg'))
// console.log(arr.findIndex(item => item.name === 'Oleg'))

// every()
// let arr = [1, 2, 3, '10', 12, 24];
// let result = arr.every((item, index, array) =>{
//     return typeof item === 'number'
// })
// console.log(result)

//some()
// let arr = [1, 2, 3, '10', 12, 24];
// let result = arr.some((item) => {
//     return typeof item === 'number'
// })
// console.log(result)
// includes(element, fromIndex)
// let arr = [1, 2, 3, 4 ,5, 6, 7, 8, 9]
// let result = arr.includes(4, 5);
// console.log(result)
// reduce()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((preVal, currVal, currIndex, array))

// методы массивов(forEach, map, filter, reduce, indexOf, includes, evevry, some)

// forEach
// let arr = ["boolean", 34, {}, true];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i], i, arr)
// }
// arr.forEach((item, index, array) => {
//     console.log(item, index, array)
// });

// map
// let arr = [1, 2, 3, 4, 'a', 6];
// let newArr = arr.map(function(item, index, array){
//     console.log(item, index, array)
//     if(item === 'a'){
//         return 5
//     }
//     return item
// })
// console.log(newArr)

// filter
// let numbers = [33, 2, 43, 10, 15]
// let newArray = numbers.filter(item => {
//     return item > 15;
// })
// console.log(newArray)
// let films = [
//     {
//         title: 'Оно',
//         genre: "horror"
//     },
//     {
//         title: 'Venom',
//         genre: "Fantasy",
//     },
//     {
// title: "Эки баатыр",
// genre: "comedy"

//     },
    
// ];
// console.log(films)
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//        return item.genre  === genre
//     })
//     console.log(filteredArr)
// }
// handleFilter("comedy")

// reduce
// let arr = [2, 4, 10, 12];
// let result = arr.reduce((prevValue, currentValue, index, array) => {
//     // console.log(prevValue, currentValue)
//     return prevValue + currentValue
// })
// console.log(result)

// indexOf
// let arr = [true, 1, 0, "str"];
// let result = arr.indexOf("str")

// console.log(result)

// function cut(elem) {
//     let index = arr.indexOf(elem)
//     console.log(index)
//     arr.splice(index,1)
// }
// console.log(arr)
// cut(false)
// console.log(arr)

//includes
// let arr = [10, 20, "array"]
// let result = arr.includes("str")
// console.log(result)

// some and every

// let users = [
// {id: 1, name: "Санжар"},
// { id:1, name: "Байэл"},
// { id: 1, name: "Атай"},
// ];
// let result = users.every(item =>  item.id === 1); 
// console.log(result)

// let arr = [1, 20, 30, -5];
// // let result = arr.every((item) => item > 0);
// let result = arr.some((item) => item > 0);

// console.log(result)
//find
// let users = [
// {id: 1, name: "Санжар"},
// { id:1, name: "Байэл"},
// { id: 1, name: "Атай"},
// ];
// let user = users.find((item) => item.name === "Атай");
// let user = users.findIndex((item) => item.name === "Атай");

// console.log(user)

// let celsius = [-15, 10, 24, 36, 0];
// let newArr = celsius.map((item)  => {
// return item * 1.8 +32
// })
// console.log(celsius)
// console.log(newArr)

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 
// 
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]
// let newStudentRecords = studentRecords.filter((item) => item.marks > 50)
// console.log(newStudentRecords)
// newStudentRecords = newStudentRecords.map((item) => {
//     item.marks += 15
//     return item
// })
// console.log(newStudentRecords)

// let ave = newStudentRecords.reduce((prev, student) => {
//     console.log(prev, student)
// return prev + student.marks
// },0)
// ave = ave / newStudentRecords.length
// console.log(ave)

// let arr = [1, 2, 3,  4, 5, 6]
// let max = arr[0]
// arr.forEach(item => {

// }
//     )
// var arr = [5, 6, 7, 8, 9];
// function func(elem) { return elem > 0 };
// alert(arr.every(func));

// let products = ["Nike", "Puma", 'Bigser']
// // let newArr = products.forEach((item) => console.log(item))
// // console.log(newArr)
// let newArr = products.map((item) => item)
// console.log(newArr)

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map(item => {
//     return item.length 
// })
// console.log(newArr)

// let names = ['sam', 'luck', 'james'];
// names = names.map((item) => {
//     item = item[0].toUpperCase() + item.slice(1)
// return item;
// })
// console.log(names)
// let arr = [1, 3, 10, -11, -555, 10];
// let newArr  = arr.filter((item) => {
//     return item < 0
// })
// console.log(newArr)
// let arr = ["str", 1, [3, 4], true, ['str'], 10]
// let newArr = arr.filter((item) => {
//     return Array.isArray(item)
// })
// console.log(newArr)

// let num = 123456789;
// let str = +num.toString() //переводим в строку
// // let arr = str.split("")//делим по буквам и переводим в массив
// let arr = arr.reverse()//переворачиваем массив
// let newStr = arr.join("")// переводим в строку
// console.log(newStr)

// let reverseNum = +num.toString().split("").reverse().join("")
// console.log(reverseNum)

// function palindrome(word){
// let palindrome = word.split("").reverse().join("")
//     if(palindrome === word){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palindrome("topot"))
// console.log("topot")

function palindrome(word){
    let secondWord = word.split("").reverse().join("")
    if(word.toLowerCase().trim() === secondWord.toLowerCase().trim()){
        console.log("palindrome")
    }else{
        console.log("not a palindrome")
    }
}
palindrome("Aziza ")

//trim - метод, убирает все пробелы до первого символа и после последнего символа

[0, 1, 1, 1, 0, 1, 0, 1]
Вывод:
[0, 1, 2, 1, 0, 1, 0, 1]
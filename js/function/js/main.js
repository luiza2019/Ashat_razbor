// функцииб области видимостиб хойстинг
// function declaration
//function expression
// arrow function

// function declaration
//  function func(){
//     console.log("Hi");
//  }

//  func();


// function sayHello() {
//     alert("Hello");
// }
// sayHello();

// обьявляем функцию
//  function имя (параметры){\
    
    
//     ..тело...
    
// }
// имя()

// function sumTwoNumbers (num1, num2){
//     let result = (num1 + num2);
//     return result;
// }
// let sum = sumTwoNumbers(10, 20); //мы ложим результат, а не функцию
// console.log(sum)
// sumTwoNumbers(500, 200);
// sumTwoNumbers(1100, 2200);


// function firstElem(arr = []) { // значение по умолчанию arr= []
//     let elem = arr.shift()
//     return elem;
// }
// let array = [true, , 2, 3, 4, 5];
// let result = firstElem();
// console.log(result)
// mulTwoNumbers(10, 20)
// function mulTwoNumbers( arg1, arg2 = 1){ // = 1 - на случай если мы не задаем второе значение
//     console.log(arg1, arg2)
//     console.log(arg1 * arg2)
// }
// mulTwoNumbers(2, 5);
// console.log(num)
// console.log(str)

// var num = 20;
// let str = '20';

// let message = "Hello world"
// function showMessage(message) {
//     console.log(message)
// }

// showMessage(message);

// let newArray = ["str"]
// function array(arr) { //здесь функция  принимают аргументы
//     console.log(arr)
// }

// array(newArray); //здесь передаются аргументы функции


// если функция принимает аргументы, то аргументы надо передавать


// let numbers = [100, 200, 300];

// function lastElemOfArray(array){
//     let lastElem = array.pop()
//     console.log(lastElem)
// }
// lastElemOfArray(numbers) // указать у какого массива нужно вырезать 


// let boolValues = [true, false, true];
// lastElemOfArray(boolValues)



//function expression  - анонимная функция
// let str = "Hello World"
// let sayHello = function(arg){
//     console.log(arg)

// }
// sayHello(str)
// let obj = {
//     title: "Makers",

// };
// function showTitle(arg1){
//     console.log(arg1)
// document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)

// let school = {
//     title: "Gazprom"
// }

// showTitle(school)
// let num1 = 50
// function func(){
//     let num1 = 20
//     console.log(num1)
//     return num1
    
// }
// console.log(num1)
// func()

//тело функции - это локальная область видимости

// function pow(x, n){
//     let result = x ** n;
//     return result;
// }
// let result = pow(2, 3);
// console.log(result);

// function a(num){
//     switch (num) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'tuesday';
//         case 3:
//             return 'wednesday';

//         case 4:
//             return 'thursday';
           
//         case 5:
//             return 'friday';

//         case 6:
//             return 'saturday';
//         case 7:
//             return 'sunday';
   
//     }
// }
// console.log(a(2));


// function sumOfNumbers(a, b){
//     let result = a + b;
//     if(a === b){
//         return (result * 3)
//     }
// }
// sumOfNumbers(2, 2)

// function sum (a,b){
//     if(a === b){
//         let result = (a+b) * 3
//         return result
//     } else{
//         let result = a + b
//         return result
//     }
// }
// console.log(sum(2, 2))
// let names = ["Maks", "Vlad","Sanjar", "Adelya", "Aidar"];
// function checkUser(arr, name){
//     for( let i = 0; i < arr.length; i++){
//         let check = arr[i];
//         if(check === name){
//             return "Yes"
//         }
//     }
//     return "No"

// }
// console.log(checkUser(names, "Askat"))

// Функции и области видимости.Классная работа.


// Задание №1
// Напишите функцию hello(), которая при
// вызове будет принимать переменную name
// (например, «Василий») и выводить строку
// (в нашем случае «Привет, Василий»).
//  При отсутствии аргумента выводить:
// "Привет, гость"
 
// function hello2(name = 'гость'){

//     console.log(`Привет ${name}`);
// }
// hello2('Василий');
// hello2()


// Задание №2
// Создайте функцию rgb(), которая будет
// принимать три числовых аргумента и возвращать
// строку вида «rgb(23,100,134)»(подставить
// аргументы под числовые значения rgb).
// Если аргументы не заданы, считать их
// равными нулю, т.е возвращать «rgb(0,0,0)»

// function rgb(arg1=0, arg2=0, arg3=0) {
//     console.log(rgb`${arg1}, ${arg2},${arg3}`);
// }
// rgb(23, 56, 90)
// rgb()


// Задание №3
// Создайте функцию которая принимает в
// аргументы 3 числовых параметра. Функция должна умножать
// первый аргумент на второй, затем отнимать третий аргумент 
// и возвращать результат.
// function example(arg1, arg2, arg3){
//     return arg1 * arg2 - arg3
// }
// console.log(example(4, 5, 6));


// Замыкание и рекурсия. Классная работа.

// Задание №1
// Создайте функцию, которая будет запрашивать
// у пользователя число, затем возвращать в
// консоли сумму всех чисел от введенного
// числа до 1.
// Например:
//    Ввод: 5
//    Вывод: 5 + 4 + 3 + 2 + 1 = 15

// let request = +prompt('Enter number');
// function recSum(num) {
//   if (num === 1) return 1;
//   return num + recSum(num - 1);
// }
// console.log(recSum(request));

// Задание №2
// 	Создайте функцию, которая запрашивает у
// пользователя число(в качестве порядкового
// числа по Фибоначи), затем выводит в консоли
// число Фибоначи по этому порядку.
// Например:
//    Ввод: 10;
//    Вывод: 55
// Числа Фибоначчи (ссылка):
// https://shorturl.at/cvE17

function fib(n){
  if(n > 1) {
    return fib(n-1) + fib(n-2)
  }else {
    return n
  }
}
console.log(fib(5,))

// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

// let arr = [1, [true], [[3], ["hello"]]];
// Вывод: [1,true,3,'hello'];
// let arr = [1, [true], [[3], ["hello"]]];
// let newArr = [];
// const arrToFloat = function(arr, i = 0){
//   if(i===arr.length) return;
//   if(Array.isArray(arr[i])) arrToFloat(arr[i])
//   else newArr.push(arr[i]);
//   arrToFloat(arr, i+1)
// }
// arrToFloat(arr);
// console.log(newArr)

// Задание №4
// Создайте функцию, которая будет проверять - чётное ли число, или нечетное? В случае если число чётное - верните True, если нечётное - False

// Например
// console.log(recEven(234)); // выведет true
// console.log(recEven(-45)); // выведет false
// console.log(recEven(37)); // выведет false

// function recEven(value) {
//   if (value % 2 == 0) return true;
//   else return false;
// }
// console.log(recEven(234));
// console.log(recEven(-45));
// console.log(recEven(37));



































//Kani
// function declaration
// function showMessage(message){
//     console.log(message);

// }
// showMessage('Makers Bootcamp');
// showMessage('Javascript');
// мы обьявляем ее один раз, и можем вызывать сколько угодно
// let result = calcMultiply(2, 7);
// console.log(result);

// function calcMultiply(a,b) {
//     return a * b

// }
// после return ни одна команда не сработает


//function expression

// let showMessage = function(message){
//     console.log(message)

// }
// showMessage('Hello world')

// let calcMultiply = function(a,b){
//     return a * b
// }
// console.log(calcMultiply(2, 7));

// hoisting

// var a = 'Makers';
// let b = 'Bootcamp';
// console.log(a);
// console.log(b)

//scope - область видимости

// let count = 0; // 1 -> 2 -> 3
// function counter(){
//     count++
//     console.log(count);
// }
// counter();
// counter();
// counter();

// function counter(){
//     let count = 10;
//     console.log(count);
// }
// counter()

// let personName = 'Luiza';
// function func() {
//     let personname = 'Kubat'
//     function func2(){
//         let personName = 'Aidai'
//         console.log(personName)
//     }
//     func2()
// }

// function checkSum (){
//     let a = +prompt('Enter first number')
// let b = +prompt('enter second number')

// let sum = a + b;
// if(sum === 15){
//     alert('Summa ravna 15');
// }else if(sum < 15){
//     alert('Summa menshe 15')

// }else{
//     alert('Summa bolshe 15')
// }
// }
// checkSum()

// function someFunc(){
//     console.log('Hello World');
// }
// let newFunc = someFunc
// console.log(newFunc);

// function calcSum(a, b){
//     return a+ b
// }

// console.log(calcSum(2, 7))
// function someFunc(a, b, c, d, e){
//     // console.log(a, b, c, d, e)
//     // console.log(...arguments);
//     // let arr = [...arguments];
//     // for (lt i = 0; i < arr.length; i++){
//     //     console.log([i])
//     // }
// for(i of arr){
//     console.log(i)
// }

// }
// someFunc('hello', false, 25, [],{});



// замыкание
// let count = 0
// function  counter() {
//     count++
//     return count   
// }
// counter()
// counter()
// console.log(counter())

// function  counter() {
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
    
// }
// let first = counter()
// first()
// first()
// first()
// console.log(first)


// рекурсии
// let x = 0;
// function rec(){
//     if(x <= 10){
//         console.log(x++)
//         rec()
//     }

// }
// rec()


                               // замыкание


//  function init(){
//      let name = "Adilet";
//      return function(){
//          console.log(name);
//      }
//  } 
//   let showName = init()
//   console.log(showName)     

// function words(arg1){
//     return function(arg2){
//         console.log(arg1, arg2);
//     }

// }
// let hello = words("hello");
// hello("world");
// hello("Sanzhar");
// let count = words("count");
// count(5);

// function sum(num1){
    // console.log(num1);
    // return function(num2){
    //     console.log(num1 + num2)
    // }
// }
// let sum10 = sum(10);
// sum10(20);
// sum(20)(40);

//замыкание - это, когда дочерняя функция замкнута на лексическом окружении родительской функции

// рекурсия
// let result = 0;
// function toSum(num){
// for(let i = num; i >= 1; i--){
//     result += i
// }
// }
// toSum(5)
// console.log(result)

// function toSum(num){
//     if(num <= 1) return num // точка выхода
//     return num + toSum(num - 1) //вызываем фунцию
// }
// let result = toSum(5)
// console.log(result)

// let arr = [32, 2, 1, 4, 1, -8, 9, 1, 2]
// function finder(arr){
//     if(arr.length < 1) return 0;
//     let currentNum = arr.splice(0,1)
//     console.log(arr)
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)

// }
// let count = finder([32, 2, 1, 4, 1, -8, 9, 1, 2])
// console.log(count)


// let arr = [true, 7, 2, 'Hello'];
// function count(arr) {
//     if(arr.length < 1) return 0;
//     let findNum = arr.splice(0,1) 
//     return typeof findNum[0] === "number" ? findNum[0] + count(arr) : count(arr)


// }
// let sum = count([true, 7, 2, 'Hello'])
// console.log(sum)





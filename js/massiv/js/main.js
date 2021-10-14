// let result = +prompt("enter your age");
// if (result > 23 && result < 40) {
//     alert("Hello");
// }else {
//     alert("goodbuy");
// }


// result > 23 && result < 40 ? alert("hello") : alert("goodbue")

// let array = [{}]

// !array.length > 0 
// ? console.log("есть")  
// : array.length > 10 
// ? console.log("да, больше")
// : console.log("нет, меньше")

// let num = 8
// num > 0 && num < 10 ? num > 5 ? alert ("num > 5") : alert("num < 5") // первое выражение
// : alert("hi")


// if(num > 0 && num < 10){
//     if(num > 5){
//         alert("num >  5");
//     }else {
//         alert("num < 5");
//     }
// }else {
//     alert("Hi");
// }




// let seasons = +prompt('Введите число от 1 до 4');

// switch (seasons) {
//     case 1: alert ("зима");
    
//          break;
//     case 2: alert("весна");

//         break;
//     case 3: alert("лето");

//         break;
//     case 4: alert("осень");
//         break;   

//     default:
//         break;
// }

// let arr = [8, 3, 4, 2, 4, 3] 
//     for (let i = 0; i < arr.length; i++) {

//         console.log(arr[i]);  
//     }



// let arr = [2, 5, 9, 15, 0, 4];
// let x = 0
// for (let i of arr){
//     if (i % 2 === 0){
//         x += i;
//     }
// }
// console.log(x)


// let obj = {
//     'bishkek': 'Kyrgyzstan',
//     'Minsk': 'Belarus',
//     'Moskva': 'Rossia',
//     'Kiev': 'Ucraine'

// };

// for (let x in obj) {
//    console.log(`${x} - это ${obj[x]}.`)
// }


// let obj = {
//     title : "Nike",
//     description: "Lorem ipsum",
//     count: 10,
// };

// for( let key in obj) {
//     console.log(key, obj[key]);
// }


// let count = 0;
// for(let i = 100; i <=500; i++){
//     // if(i % 3 === 0){   if(!(i%3))
//         count++;
//     }
// }
// console.log(count)



// let arr = ["arbuz", "dynya","vishnya"]
// arr.push("klubnika")
// arr.splice(arr.length, 0, "klubnika")
// let newArr = arr.splice(1, 1)
// let newArr = arr.slice(1, 3)  //не включительно

// arr.unshift("10")

// console.log(arr)

// развернутый ответ
// for(let i = 0; i < arr.length; i++){
    // if(arr[i] === "dynya"){
    //     arr.splice(i + 1, 0, "tomato");
    // }
    // let str = arr[i]; // записываем слово в переменную str
    // let strArr = str.split(""); //переводим наше слово в массив
    // let upperLetter = strArr[0].toUpperCase() //первый элемент массива переводим в вехний регистр
    // strArr.splice(0, 1, upperLetter) // заменяем первый элемент массива strArr на новую букву

    // let newStr = strArr.join(""); // переводим наш массив StrArr в строку
    // arr.splice(i, 1, newStr) // заменяем старое слово но новую
    

// console.log(arr);
//  for (let i = 0; i < arr.length; i++){
//      let str = arr[i];
//      str = str[0].toUpperCase() + str.slice(1)
//      arr.splice(i, 1, str)
//      console.log(str);
//  }
















// let users = { John: 28, Mark: 30, David: 25, Richard: 42};
// let sum = 0;
// for(let x in users){
//     sum += users[x];
// }
// console.log(sum)


// let x = 45;
// while (x < 670) {
//     if (x % 10 === 0) {
//         x++;

//     }
//     console.log(x);
// }









// arrays
//  let numArr = [1, 2, 3, 4, 5];
//  console.log(numArr);


 //length

//  console.log(numArr.length)

 //доступ к элементам массива
//  console.log(numArr[3])

//  console.log(numArr[numArr.length - 1])

// const guests = [
//     {
//         name: 'Alice'
//     },
//     {
//         name: 'John'
//     },
//     {
//         name: 'Emily'
//     },
//     {
//         name: 'Raychel'
//     }
// ]

// let newGuest = {
//     name: 'Alex'
// }

// push - добавляет элемент в конец массива
//  guests.push(newGuest);
//  console.log(guests)

 // pop - удаляет последний элемент массива

//  guests.pop()
//  console.log(guests)

// let importantGuest = {
//     name: 'Jack'
// }

// unshift - добавляет в начало
// guests.unshift(importantGuest)
// console.log(guests)
 

// простые методы массивов

// push, pop, shift, unshift
// let arr = [1, 2, 3]
// arr.push(4); //добавляет в конец
// console.log(arr);


// let num = arr.pop() //вырезает 1 элемент с конца
// arr.pop(); //вырезает два элемента
// console.log(arr)
// console.log(num) //показывает вырезанный элемент

// let arr = ['Kyrgyzstan', 'Uzbekistan', 'Russia']
// arr.unshift("China") // добавляет в начало
// console.log(arr) 

// let country = arr.shift // вырезает один элемент с начала
// console.log(arr);
//     console.log(country);

// splice, slice вырезает

// let nums = [22, 40, 38, 50]
// let res = nums.splice(2, 0, "1");
// console.log(nums)
// console.log(res) 


//массив.splice( с какого начать, сколько вырезать, что вставить , изменяет масив)
 
// let arr = [100, 31, 47, 68] // только скопировать , второй индекс не включительно
// let num = arr.slice(1, 2);
// console.log(arr);
// console.log(num);

// массив.slice( с какого начать, по какой не включительно, не изменяет массив)

//reverse 

// let arr = [1, 2, 3, 4, 5];
// arr.reverse()
// let str = arr.join("+") // из массива делает строку
// console.log(arr);
// console.log(str)

// let newArr = str.split("+"); // из строки  делает массив
// console.log(newArr);

//sort

// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a,b) => a - b); сортирует по возрастанию
// nums.sort((a, b) => b - a) // сортирует по убыванию
// console.log(nums);


// concat - соединяет массивы
// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
//  let result = res1.concat(res2, ["str", "boolean"]);
//  console.log(result);

// let myArray = ["Kubat", "Malik", "Ainura", "Maksat", "Adelina", "Askat"]
// for(let i = 0; i < myArray.length; i++){
//     myArray.splice(i, 1, [myArray[i], i])
//     console.log(myArray)
// }

// let mixedUsers = [
//     {
//         role: "User"
//     },
//     {
//         role: "admin"
//     },
//     {
//         role: "admin"

//     },
//     {
//         role: "admin"
//     },
//     {
//         role: "user"

//     },
//     {
//         role: "user"
//     }
// ];

// let admins = [];
// let users = [];

// for (let i = 0; i < mixedUsers.length; i++){ 
// if(mixedUsers[i].role === "admin"){
//     admins.push(mixedUsers[i]);
// }else if (mixedUsers[i].role === "user") {
//     users.push(mixedUsers[i]);
// }
// }

// console.log(admins);
// console.log(users);


// for - цикл 

// if 

// for(let index = 0; index < mixedUsers.length; index++){
//     console.log(index)
// }


// let products = [
//     {size: 's'},
//     { size: 's' },
//     { size: 's' },
//     { size: 's' },
//     { size: 'l'},
//     { size: 'l' },
//     { size: 'l' },
//     { size: 'l' },
//     { size: 'm' },
//     { size: 'm' },

// ];
// console.log(products);
// let sSize = [];
// let lSize = [];
// let mSize = [];

// for(let i = 0; i < products.length; i++) {
//    if (products[i].size === "s"){
//        sSize.push(products[i]);

//    }
//    else if (products[i].size === "l"){
//        lSize.push(products[i]);

//    }
//    else if (products[i].size === "m"){
//        mSize.push(products[i]);

//    }

// }
// console.log(sSize);
// console.log(lSize);
// console.log(mSize)













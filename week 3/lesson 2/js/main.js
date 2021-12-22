//логические операторы

//  console.log(true && true)
// console.log(true && false)
// console.log(true && ' ')
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(!!true)
// console.log(!false)

// console.log(true && true ||false && !false)
// console.log(true || !true && false ||false)
// console.log(!false && !true || !true)

// console.log(false || !false && !!true)

//Условные операторы

// let num1 = 140
// let num2 = 141
// if(num1 === num2) {
//     console.log('num1 === num2')
// }
// else if(num1 > num2)
// console.log("num1 > num2");
// else if(num1 < num2)
//     console.log('num1 < num2');
// else {
//     console.log('не подошло');
// }
// const value = "Hello"
// const number = 50 
// if (value === "Hello") {
//     console.log("Hello World");
// }
// if(number > 50) {
//     console.log("Number > 50")
// }
// else if (number < 50) {
//     console.log("number < 50") 
// }
// else {
//     console.log("number === 50")
// }

// let sum = 100
// let result = 201

// if(sum === 100 || result ===200) {
//     console.log("Yes");
// }
// else {
//     console.log("No")


// }

// тернанрный оператор

// let user1 = "Ulan"
// let user2 = "Ulan"

// user1 ===  user2 ? console.log("усли условия true") : console.log("если условия false")

// let num = 1
// let num2 = 2

// num < num2 && 10 > 11 ? alert(true) : alert(false)

// 0 || !1 && -1 ? console.log(true) : console.log(false)

// Switch
// let str = "School"

// switch (str) {
//     case "School": 
//     console.log("GOOD")
//     break;
//     case "Bootcamp":
//         console.log("BOOTCAMP")
//         break;
//         default:
//             console.log("College")
//             break;
// }

// let code = prompt("Введи тег h1")

// switch(code) {
//     case "<h1></h1>":
//     alert("Правильно ввели")
//     break;
//     case "h1":
//     break;
//     alert("Почти правильно")
//     break;
//     default:
//         alert("Повтори заголовки")
// }

// let temp = +prompt("Введите температуру")

// temp < 0 ? console.log(`Температура воздуха опустится до ${temp} градусов`) :
// console.log(`Температура поднимется до ${temp} градусов`)


// if (temp < 0) {
//     console.log(`Температура воздуха опустится до ${temp} градусов`)
// }
// else  {
//     console.log(`Температура поднимется до ${temp} градусов`)
// }

let min = +prompt("введите число от 0 до 59")

if (min <= 14 && min > 0)  {
    console.log("первая")
    
}
else if ( min <= 30) {
    console.log("второя")
}
else if (min < 45) {
    console.log("третья")
}
else if ( min < 60) {
    console.log("четвертая")
}


// for 
// let arr = [1, 2, 3, 4, 5,];
// // for(period) {body/action}
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// }


// let data = ['Kubat', 'Aktan', 'Kani', 'Adilet'];
// for(let i = 0; i < data.length; i++) {
//     if(data[i] === 'Aktan') {
//         console.log(`${data[i]} not invited!!!`);
//         // continue
//         break


//     }
//     console.log(`${data[i]} you are invited`);
// }

// while

// let i =0;
// while( i < 3){
//     console.log(i);
//     i++
// }

// do .. while

// let i = 10;
// do {
//     console.log(i);

// }while(i < 10)

// for..in

// let obj = {
//     name: 'Kani',
//     age; 22,
//     isHuman: true,
//     languages: ['Python', 'JavaScript']

// }

// for( i in obj){
//     console.log(obj[i]);
// }

// for .. of

// let arr = ['Python', 'JavaScript', 'PHP', 'Java'];
// for(i of arr) {
//     console.log(i);
// }


// while, do while

// let arr = [1, 2, 3, 4, 5]
// console.log[0]
// console.log[2]

// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let number = 1
// while (number <= 100){
//    if(number % 2 !== 0) {

//        console.log(number)
//    }
//    number++
// }


//do ... while 

// let i = 50
// do {
//     console.log(i, "Сработает один раз по любому")

// } while(i < 40)

// for

// for(let i = 0; i < 20; i++) {
// console.log(i)
// }

// let arr = ["Arstan", "Beka", "Akai"]
// for( let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
//     if(arr[i] === "Beka"){ 
//         alert(arr[i])
//         continue;

//     }
//     console.log("код ниже")
// }


// let users = [
//     {
//         name: "Аскат"
//     },
//     {
//         name: "Санжар"
//     },
//     {
//         name: "Vladimir"
//     },
//     {
//         name: "Erlan"
//     }
// ]

// for(let i = 0; i < users.length; i++){
//     document.write(`<p>имя: ${users[i].name}</p>`)
// }
// console.log(users)


// for of, for in 

// for (let value of users) {
//     console.log(value)
// }

// for (let value in users) {
//     console.log(users[value])
// }

// let user = {
//     name: "Atai"
// }
// for (let key in user) {
//     console.log(user[key])
// }

// for (let value of user) {
//     console.log(value)
// }
// c помощью for in можно перебирать и обьекты и массивы, 
//с помощью for of можно перебирать только массивы


// let number = 5 
// console.log(number++, number += 1)
// console.log(number--)
// console.log(number)

//тут он видит 5, а на след плюсует 1
//если ++ перед он его сначала прибавляет 1 

// number += 1 равносильно

// number = number + 1

// let arr = [true, 7, 2, 'Hello', NaN]

// let sum = 0

// for( let i = 0; i < arr.length; i++){
//     if( typeof arr[i] === 'number' &&  arr[i].toString() !=="NaN"){
        
//         sum += arr[i]
//     }
// }
// console.log(sum)


let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]

let positive = 0
let zero = 0
let negotive = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === o) {
        zero++
    }
    else if (arr[i] > 0) {
        positive++
    }
    else if (arr[i] < 0) {
        negotive++
    }
}
console.log(zero, positive, negotive);
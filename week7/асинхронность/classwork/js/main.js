
//! синхронность и асинхронность, promise, запросы

//! setTimeOut позволяет вызвать функцию только один раз через определенное время
// setTimeout(() => {
//     console.log("Zero")
// }, 2000)
// console.log("First")
// console.log("Second")
// console.log("Third")
//! setInterval позволяет нам вызвать функцию регулярно, через определенный интервал времени
// let id = setInterval(() => {
//     console.log("hi")
// }, 3000);
// setTimeout(() => {
//     clearInterval(id)
    
// }, 5000);

//! promise  это объект, у которго есть три состояния: 
// !pending - ожидание 
// !fulfilled - успешно выполнено (resolve)
// ! rejected - выполнено с ошибкой

// методы Promise

//! then -  отловит успешный результат
//! catch - отловить результат с ошибкой
//! finally - отловить вне зависимости от результата

// const promise = new Promise((resolve, rejected) => {
//     let age = prompt("Enter age")
//     if(age > 25){
//         resolve("TRUE")
//     }else{
//         rejected("False")
//     }
// })
// promise.then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("Итог")
// })

//! запросы

//! XMLHttpRequest
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon")
// xhr.send()
// xhr.onload = function(){
//     let response = JSON.parse(xhr.response);
//     console.log(response)
// }

//! fetch

//! статусы
// 200-299 успешно
//400 ошибка на фронте
//403 нету доступа
// 404 не найдено
// 500 ошибка сервера
// let API = "https://pokeapi.co/api/v2/pokemon"
// fetch(API)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// });

let tbody = $("tbody")
let prev = $(".prev")
let next = $(".next")
let preloader = $(".preloader")
let API = "https://swapi.dev/api/people"
function render(url) {
    preloader.css("display", "flex")
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
     console.log(data)
     preloader.css("display", "none")

        tbody.html("")
        data.results.forEach((item) => {
        tbody.append(`
        <tr>
        <td>${item.name}</td>
        <td>${item.eye_color}</td>
        <td>${item.mass}</td>
        <td>${item.height}</td>

        </tr>
        `)
        });
        if(!data.previous){
            prev.addClass('disabled');
        } else {
            prev.removeClass('disabled')
            prev.attr("id", data.previous)
        }
        if(!data.next){
            next.addClass("disabled");
        }else{
            next.removeClass("disabled")
            next.attr("id", data.next)
        }

    })
}
next.on("click", (e) =>{
    let url = e.currentTarget.id
    // console.log(url)
    render(url)
})
prev.on("click", (e) => {
    let url = e.currentTarget.id
    render(url)
})
render(API)




































// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((result) => result.json())
//     .then((data) => {
//         // console.log(data);
//         data.results.forEach((item) => {
//             console.log(item);
//         });
//     });
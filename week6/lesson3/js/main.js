// !jquery

// let allElems = $('*')
// console.log(allElems)

// tagname
// let h1 = $('h1');
// console.log(h1);
// h1.css('fontSize', '24px')
// h1.css('color', 'red')
//!classname
// let month = $('.october');
// console.log(month)

//!native js
// let liTags = document.querySelectorAll('li');
// liTags.forEach((item) => {
//     item.style.color = 'blue'
// })
// jquery
// let liTags = $('li');
// liTags.css('color', 'blue')
// let thirdLiTag = $('li:nth-child(3)') // по порядковому номеру
// let thirdLiTag = $('li:eq(3)') // 2-sposob index
// thirdLiTag.css('color','green');
// let first = $('li:first-child');
// first.css('fontWeight', 'bold')
// $('li:last-child').css('fontSize', '30px')

// let inputs = $('input');
// let disabledInput = $('input:disabled')
// console.log(disabledInput)
// disabledInput.val("не работает")
// let value = disabledInput.val()
// console.log(value);

// let liTags = $('li');
// liTags.addClass('list-item');
// liTags.toggleClass('list-item');
// liTags.toggleClass('active');

// liTags.removeClass('list-item')
// let result = liTags.hasClass('active')
// console.log(result)

// let divWithoutClass = $('div:not(.block)');
// console.log(divWithoutClass);

// let paragraph = $('.text');
// let text = paragraph.text()
// console.log(text)
// paragraph.text(paragraph.text() + ' hello')
// paragraph.html('<strong>JSFS-13</strong>')

// let div = $('#users');
// let users = [
//     {
//         name: "Aibek",
//         age: 15,
//     },
//     {
//         name: "Ailin",
//         age: 18,
//     },
//     {
//         name: "Aitegin",
//         age: 25,
//     },
// ];
// users.forEach((item) => {
//     div.append(`
//     <p>Имя: ${item.name} <br> Возраст: ${item.age}</p>
//     <strong>14:55</strong>
//     `)
// })
// let google = $('a[href="google.com"]')
// console.log(google)
// let p = $('p')
// p.text(new Date())

// let google = $('a:first');
// console.log(google)
// let href = google.attr("href", "amazon.com")
// google.removeAttr("href");
// google.attr("id", 'global')
// console.log(href);

// let href = google.prop('href');
// console.log(href)

// let liTags = $('li');
// liTags.each((index, elem) => {
//     console.log(index, elem);
//     if(index % 2 !== 0){
//         $(elem).css('background', 'red')
//     }
// });


let btnStart = document.querySelector('.start')
let btnReset = document.querySelector('.reset')
let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let winner = document.querySelector('.winner')
btnStart.addEventListener('click', () => {
    let randNum1 = Math.floor(Math.random() * (450 - 400) + 400)
    let randNum2 = Math.floor(Math.random() * (450 - 400) + 400)
    car1.style.transform = `translateX(${randNum1}px)`
    car2.style.transform = `translateX(${randNum2}px)`

    setTimeout(() => {

        if(randNum1 > randNum2){
            winner.innerText += " " + "Car #1"
        }else {
            winner.innerText += " " + "Car #2"
        
        }
        
        },1000)
    })
btnReset.addEventListener("click", () => {
    winner.innerText = "Winner is:";
    car1.style.removeProperty('transform')
    car2.style.removeProperty('transform')

})
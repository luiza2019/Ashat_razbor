// события native js
//DOMContentLoaded

// document.addEventListener("DOMContentLoaded", () =>{
//     console.log("DOM полностью загружен")
// });

// let btn = document.querySelector("button")
//#2
// btn.onclick = () => {
//     alert("CLICKED")
// };
//#3
// btn.addEventListener("click", (event) => {
    // alert("CLICKED")
//     console.log(event)
// });

//online, offline
// window.addEventListener("offline", () => {
//     console.log("пропал интернет");
// })
// window.addEventListener("online", () => {
//     console.log("появился интернет");
// });

//mousemove-любое движение мышью, 
// mousedown-при нажатии на мышь, 
// mouseup - при отпускании мыши

// document.addEventListener("mousemove", (e) => {
//     console.log(e)
// });
// document.addEventListener("mousedown", (e) => {
//     console.log(e)
// })
// document.addEventListener("mouseup", (e) => {
//     console.log(e)
// });

// input- на каждое изменение inputa
//paste - когда вставляем
//copy - когда копируем
// let input = document.querySelector("input")
// let h3 = document.querySelector("h3")
// input.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     h3.innerText = e.target.value
// })

// input.addEventListener("paste", (e) => {
//     alert("Нельзя вставлять текст")
// })

// input.addEventListener("copy", (e) => {
//     alert("нельзя скопировать")
// })

//resize - при изменении размера экрана
// window.addEventListener("resize", (e) => {
//     console.log(e)
// })

//submit - у тега form при нажатии на enter

// let input = document.querySelector("input")
// let form = document.querySelector("form");
// let ul = document.querySelector("ul")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let text = input.value
//     let li = document.createElement("li");
//     li.innerText = text;
//     ul.append(li);
//     input.value = ""
// });

//!keypress - люое нажатие на клавишу
//*keydown - при нажатии на клавишу
//?keyup - при отпускании клавиши

// document.addEventListener("keypress", (e) => {
//     console.log(e)
// });

// document.addEventListener("keydown", (e) => {
//     console.log(e)
// });
// document.addEventListener("keyup", (e) => {
//     console.log(e)
// });

// let span = document.querySelector(".first-span")
// let btnChangeColor = document.querySelector(".change-color")
// let btnChangeSize = document.querySelector(".change-size")

// btnChangeColor.addEventListener("click", () => {
//     let red = Math.ceil(Math.random() * 255)
//     let green =  Math.ceil(Math.random() * 255)
//     let blue = Math.ceil(Math.random() * 255)
//  span.style.color = `rgb(${red}, ${green}, ${blue})`
// })
// btnChangeSize.addEventListener("click", () => {
//     span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// })

// let input = document.querySelectorAll("input")




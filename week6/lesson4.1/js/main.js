//! localStorage, sessionStorage

//! setItem, getItem, removeItem, clear

//!JSON.striingify(), JSON.parse()

// let user = {
//     name: 'Kamila',
// };

// localStorage.setItem("user", JSON.stringify(user)) // !сохранить значение (ключ/значение)
// let data = localStorage.getItem("user") //! получить данные по ключу в формате строки
// let newData = JSON.parse(data) // ! переводит из строки в наш формат
// console.log(newData);

// localStorage.removeItem("user") //!удаляет данные по ключу
// localStorage.clear() //! удаляет все

// sessionStorage.setItem("user", JSON.stringify(user))

//! users LIST 

let form = $('form')
let inpName = $('.inp-name')
let inpAge = $('.inp-age')
let inpCity = $('.inp-city')
let inputs = $("input")

let tbody = $("#tbody")


inputs.on("input", (e) => {
    if(e.target.value){
        $(e.target).css("border", '1px solid')
    }
}); 
inputs.on("blur", (e) => {
    if (!e.target.value)
    $(e.target).css("border", '3px solid')
})
function addUser(event) {
    event.preventDefault()
    let name = inpName.val()
    let age = inpAge.val()
    let city = inpCity.val()
    let boolean = true;
    if (!name) {
        inpName.css("border", "3px solid red")
        boolean = false;
    } if (!age) {
        inpAge.css("border", "3px solid red")
        boolean = false;

    } if (!city) {
        inpCity.css("border", "3px solid red")
        boolean = false;
    }
    if (!boolean) {
        return;
    }
    let user = {
        name: name,
        age: age,
        city: city,
        id: Date.now(),
    };
    // console.log(user)
    let users = JSON.parse(localStorage.getItem("list")) || [];
    console.log(users)
    users.push(user);
    localStorage.setItem("list", JSON.stringify(users))
    inpName.val("").css("border", "1px solid")
    inpAge.val("").css("border", "1px solid")
    inpCity.val("").css("border", "1px solid")
    render()

};

function render(){
    let users = JSON.parse(localStorage.getItem("list")) || [];
    tbody.html("")
    users.forEach((item, index) => {
        tbody.append(`
          <tr>
            <th scope="row">${index +1}</th>
            <td>${item.name}</td>
            <td>${item.age}</</td>
            <td>${item.city}</</td>
        </tr>
        `)
    })
}

render()

form.on("submit", addUser)






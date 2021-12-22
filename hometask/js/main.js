let currentPage = 1;

const API = `http://localhost:8001/contacts?_page=${currentPage}&_limit=3`
const SECOND_API = "http://localhost:8001/contacts"
let contactName = $("#contact-name")
let contactSurname = $("#contact-surname")
let contactNumber = $("#contact-number")
let contactNote = $("#contact-note")
let btnSave = $(".btn-save")
let btnDelete = $(".delete-btn")
let modal = $(".modal")

// !create

async function addContact() {
    let name = contactName.val();
    let surname = contactSurname.val()
    let number = contactNumber.val()
    let note = contactNote.val()

    console.log(name, surname, number, note)
    let contact = {
        name,
        surname,
        number,
        note,
    };
    try {
        const response = await axios.post(API, contact);
        console.log(response)
        Toastify({
            text: response.statusText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }

        }).showToast();
        modal.modal("hide")
        render(API)

    } catch (e) {
        Toastify({
            text: e.response.statusText,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            }

        }).showToast();
    }
}


$('body').on("click", ".delete-btn", async (e) => {
    let id = e.target.id

await axios.delete(`$({SECOND_API}/$({id}`)  
  render(API)

// !Read

let list = $(".list")
let prev = $(".prev")
let next = $(".next")

async function render(url) {
    try {
        const response = await axios(url)
        // console.log(response.headers.link);
        list.html("")
        response.data.forEach((item) => {
            list.append(`
    <div class="card mt-3 mb-3" style="width: 18rem;">
  <img style="width: 100%; object-fit: contain; height: 190px" src=${item.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name} </h5>
    <p class="card-text">${item.surname}</p>
    <p class="card-text">${item.note}</p>
    <a href="#">${item.number}</a>
     <button id=${item.id} type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal"
                            data-bs-target="#editModal">
                            Изменить
                        </button>
                          <button id=${item.id} type="button" class="btn btn-primary delete-btn" data-bs-toggle="modal"
                            data-bs-target="#editModal">
                            Удалить
                        </button>
  </div>
</div>
    `)
        })
        //! Pagination
        let links = response.headers.link.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim);

        if (!links) {

            prev.attr("disabled", "true");
            next.attr("disabled", "true");
            return;
        }
        if (links.length === 4) {
            prev.attr("id", links[1])
            next.attr("id", links[2])
            prev.removeAttr("disabled")
            next.removeAttr("disabled")

        } else if (links.length === 3 && currentPage === 1) {
            prev.attr('disabled', 'true')
            next.attr('id', links[1]);
        } else if (links.length === 3 && currentPage != 1) {
            next.attr('disabled', 'true')
            prev.attr('id', links[1])
        }


    } catch (e) {
        console.log(e)
    }
}
render(API)
next.on("click", (e) => {
    let url = e.target.id
    render(url)
    currentPage++;
})
prev.on("click", (e) => {
    let url = e.target.id;
    render(url)
    currentPage--;
})
//! search

let searchInp = $(".inp-search")
searchInp.on("input", (e) => {
    let value = e.target.value;
    let url = `${API}&q=${value}`
    // console.log(url)
    render(url)
    currentPage = 1
})

//! Update
let contactNameEdit = $("#contact-name")
let contactSurnameEdit = $("#contact-surname")
let contactNumberEdit = $("#contact-number")
let contactNoteEdit = $("#contact-note")
let btnSaveEdit = $(".btn-save")


$(document).on("click", ".edit-btn", async (e) => {
    let id = e.target.id;
    console.log(id);
    try {
        const response = await axios(`${SECOND_API}/${id}`)
        contactNameEdit.val(response.data.name)
        contactSurnameEdit.val(response.data.surname)
        contactNumberEdit.val(response.data.number)
        contactNoteEdit.val(response.data.note)
        btnSaveEdit.attr("id", id)



        // console.log(response.data)
    } catch (e) {

        console.log(e)
    }
})

btnSaveEdit.on('click', async (e) => {
    let id = e.target.id
    let name = contactNameEdit.val()
    let surname = contactSurnameEdit.val()
    let number = contactNumberEdit.val()
    let note = contactNoteEdit.val()
    let contact = {
        name,
        surname,
        number,
        note,
    }
    try {
        await axios.patch(`${SECOND_API}/${id}`, contact)
        modal.modal("hide")
        let url = `http://localhost:8001/contacts?_page=${currentPage}&_limit=3`
        render(url)
    } catch (e) {
        // console.log(e)
    }

})

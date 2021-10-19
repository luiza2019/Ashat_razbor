let btn = $('.btn');
let inp = $('.task-input')
let list = $('.task-list');
btn.on('click', function(){
  if(!inp.value()){
alert('Введите данные')
return
  }
    let obj = {
        task: inp.val()
    }
    setItemToStorage(obj)
    render()
})

function setItemToStorage(task){
    if(!localStorage.getItem('tasks-data')){
        localStorage.setItem('tasks-data', '[]')
    }
    let data = JSON.parse(localStorage.getItem('tasks-data'));
    data.push(task)
    localStorage.setItem('tasks-data', JSON.stringify(data));
    // localStorage.getItem()
}
function render(){
    let newData = JSON.parse(localStorage.getItem('tasks-data'))
// console.log(newData)
list.html('')
newData.forEach(item => {
    list.append(`<li>${item.task}</li>`)
})
}
render()

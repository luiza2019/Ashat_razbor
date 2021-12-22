const inp = $('.inp-search')
const btn = $('.btn-search')
const mainBox = $('.main-box')
const box = $('.box')

btn.on('click', () => {
    let val = inp.val()
    fetch(`https://goweather.herokuapp.com/weather/${val}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const today = new Date
        mainBox.append(`
        <div class="card">
            <div class="card__inner">
                <img width="100px" src="https://lh3.googleusercontent.com/proxy/YueO9J4ajV6dyUuyb8qYFvHSWT5lqjBwbMnWzNBogd1Ux-2KFktKL6VO7mBIt3gs8DAFJ0JK1PjtYbOmg6WqolSS40CKOXKZYuleFBTSxUyRAYMPpm-5M1BWFQ6hXiyITS7f6YnextC10vLi86sMahFY" alt="">
                <div class="card__city">${val}</div>
              
                <h2 class="card__temp">${data.temperature}</h2>
                <div class="card__wind">${data.wind}</div>
                <div class="card__date">${today.getDate()}</div>


            </div>
        </div>
        `)

    })
})
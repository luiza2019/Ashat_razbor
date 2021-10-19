
fetch('https://pokeapi.co/api/v2/pokemon')
    .then((result) => result.json())
    .then((data) => {
        // console.log(data);

        data.results.forEach((item) => {
            console.log(item);
            fetch(item.url).then((res) => res.json()).then((dat) => console.log(dat))
            // fetch((item.type)).then((re) => re.json()).then((da) => console.log(da))
        });
    });




































// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((result) => result.json())
//     .then((data) => {
//         // console.log(data);
//         data.results.forEach((item) => {
//             console.log(item);
//         });
//     });
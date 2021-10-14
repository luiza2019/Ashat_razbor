// регулярные выражения 
// есть два способа создания рв

// const regexp1 = /coding/ // 1 способ
// const regexp2 = new RegExp("coding") // 2 способ

// const str = "code is easy"
// let result = str.match(regexp1) || [];
// console.log(result)

// if(result.length > 0){
//     console.log("есть")
// }else{
//     console.log("Netu")
// }


// флаги 

// i игнорирует регистр
//g  поиск ищет все совпадения, а без него только первое

// let regexp = /code/gi;
// let str = "code, bad Code";
// let result = str.match(regexp)
// console.log(result)

// метод строки match  ищет и возвращает массив, если не найдено то null

// let str = "Работайте братья, работайте";
// let regexp = new RegExp("работайте", "gi")
// let result = str.match(regexp)
// console.log(result)

// метод строки replace ищет совпадение и заменяет их

// let str = "Требуется миддл разработчик"
// let regexp = /миддл/
// let result = str.replace(regexp, 'джуниор');
// console.log(result);
  
// метод регулярного выражения test  проверяет хоть одно совпадение , если да, то возвращает false

// let str = "We can"
// let regexp = /We/
// let result = regexp.test(str)
// console.log(result)

// \d - цифра от 0 до 9
//\s - пробел
// \w символ, буквы латинского алфавита, или _
// \D не цифра, все кроме цифр от 0-9
// \S - не пробел, все кроме пробела
// \W - все символы, кроме букв латинского алфавита и _  и не цифра

// . - любой символ 

// let str = "moding is easy"
// let regexp = /\w\w\w\w\w\w.\w\w\s\w\w\w\w/
// let result = str.match(regexp);
// console.log(result)

// якоря -
// ^ - начало строки
//$ - конец строки
// let time = "20:12"
// let regexp = /^\d\d:\d\d$/;
// let result = regexp.test(time)
// console.log(result);

// наборы []

// let str1 = "mad";
// let str2 = "sad";
// let regexp = /\w[ms]ad/ // либо mad, либо sad
// let result = str1.match(regexp)
// console.log(result)

//диапозоны
// let str = '123456789'
// let regexp = /[1-9]/g
// let result = str.match(regexp)
// console.log(result)
// [0-9]
//[a-z]
//[A-Z] \w
//[а-я]
//[А-Я]

// исключения 
// let regexp = /[^aeiou]/ //все кроме этих букв , якорь внутри набора работает так
// квантификаторы

// {n}  количество
// let numbers = "12 555 3477"
// let regexp = /\d{3,4}/g
// let regexp = /\d+/
// + означает 1 или более символов
// let regexp = /\d?/;
// let result = numbers.match(regexp)
// console.log(result)

// let string  = "color or colour";
// let regexp = /colou?r/g
// let result = string.match(regexp)
// console.log(result)

//скобочные группы
// let string = "mail.gmail.ru"
// let regexp = /(\w+.)+\w+/g
// let result = string.match(regexp)
// console.log(result)

// let str = "brown, black, blue, lightblue"
// let regexp = /[aeiou]/gi
// let result = str.match(regexp)
// console.log(result.length);

// let str = "5 apples and 5 oranges"
// let regexp = /5/
// let newStr = str.replace(regexp, "пять");

// console.log(newStr)

// Альтернация (или) '|'

let str = "I know Java, Python, Flutter, JavaScript, Dart";
let regexp = /Java(Script)?|Python|Flutter|Dart/g
let result = str.match(regexp)
console.log(result)


































// const str = 'Hello. My name is Kani. I am 22 years old and I live in Bishkek'
// const regexp = /Kani/;
// const rege = /\d\d/g;
// const regexp = /\w/
// const regexp = /\W\W\W 
// const regexp = /\D\D\
// const str = 'Hello. We are Alan and Ulan, Elan'
// const regexp = /[AUE]lan/g;
// const str = 'Today is 20.10.2020';
// const regexp = /\d\d.\d\d.\d\d\d\d/
// const regexp = /\d{2}.\d{2}.\{4}/
// const regexp = /\./
// const result = str.match(regexp);
// console.log(result);

// let str = 'We see yoou. we need you';
// let pattern = /we/gi;
// console.log(str.replace(pattern, 'I'));
// let str = prompt('Enter word: ');
// let regexp = new RegExp(/[a-zA-Z]/), 'g';
// console.log(regexp.test(str));

// let str = prompt('Enter word');
// let regexp = new RegExp(/\d+/, 'g');
// let str = prompt('Enter product weight');
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi');
// console.log(regexp.test(str));
// let str = 'Name: Jack, LastName: Smith';
// let newArr = [];
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== 'a') newArr.push(str[i])
//     else newArr.push('*')
// }
// let newStr = newArr.join('');
// console.log(newStr)
// console.log(str.replace(/a/gi, '*'))
// let str = prompt('Enter your phone number');
// let regexp = new RegExp[^\+996\d{9}/, 'g'];
// console.log(regexp.test(str));
// if(regexp.test(str)){
//     alert('Correct')
//     else{
//         alert('Wrong')
//     }
// }
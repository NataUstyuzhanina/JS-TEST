
const names = [
    'Сергей',
    'Саша',
    'Диана',
    'Коля',
    'Петя',
    'Алена',
    'Вася',
    'Антон',
    'Лена'
]

const namesReversed =[];

for (let i = 0; i< names.length; i++) {
    console.log(names[i], names[names.length - i -1]);
}


/*
let temps =[44,33,22,55]
let max = temps[0];
let min = temps[0];

for (i = 0; i< temps.length; i++) {
console.log(i,temps[i])
}

console.log(typeof max);
console.log(typeof temps[0]);
*/

///////Написать программу, к-я вычисляет макс и мин t за неделю
//Данные вводятся за каждый день недели пользователем в массив temteratures
/*
const WEEKS_DAYS = 7;
const REQUEST_TEMP_TEXT = 'Введите температуру за день';
const temps = [];

for (let i = 0; i < WEEKS_DAYS; i++) {
    const dayCount = i + 1;
    const tempInput = prompt (`${REQUEST_TEMP_TEXT} ${dayCount}`);
    const temp = Number(tempInput);

    temps.push(temp);
}
 
let max = temps[0];
let min = temps[0];
let sum = 0;

for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
    
    sum += temps[i];
}

const average = sum / temps.length;

console.log(max, min, average);
*/



/////Создать массив из 10 произдвольных чисел, найти кол-во четных чисел в массиве
/*
const NUMBERS_COUNT = 10;
let numbers = [];

for (let i = 0; i < NUMBERS_COUNT; i++) {
    const random = Math.floor(Math.random() * NUMBERS_COUNT);
    numbers.push(random);
}

let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
 console.log(numbers);
 console.log(evenCount);
*/


///// Создать массив из 7 произвольных чисел, найти мах элемент и его индекс
/*
let numbers = [];
for (let i = 0; i < 7; i++) {
    numbers.push(Math.random());
}

let maxIndex = 0;
let max = numbers[maxIndex];

for ( let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        maxIndex = i;
    }
}
console.log(numbers);
console.log(maxIndex, max);
*/


////// Сформировать массив чисел от 1 до 200, найти среднее арифметическое
// вывести в консоль
/*
let numbers = [];
for ( let i = 0; i <= 200; i++) {
    numbers.push(i);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length;
console.log(average);
*/


//////Найти сумму чисел элементов массива
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
*/


///// push unshift pop shift
/*
let arr = [1,2,3,4,5,6,7];

arr.push(12,13);
console.log(arr);

arr.unshift(0,56);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
*/


/////Получить элемент с конца массива
/*
let arr = [1,2,3,4,5,6,7];
console.log(arr[arr.length -1]);
*/


/*
let a = 1;
let b = 2;
let c = 3;

let arr = [a,b,c];
console.log(arr);
*/



/*
let arr = [1, 2, 3, ''];
console.log(arr.length);
console.log(arr);
*/



/*
let arr = new Array();
console.log(arr);
*/
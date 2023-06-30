//////Напишите ф-ю filterQdds, к-я принимает массив и возвращает новый, состоящий 
//из нечетных значений входного массива
/*
function isEven(number) {
    return number % 2 === 0;
}

function filterOdds(arr) {
    const result = [];

    for (let i = 0; i < arr.lenght; i++) {
        
        if (isEven(arr[i])) continue;
        result.push(arr[i]);
       
    }
    return result;
}
console.log(filterOdds([1,2,3,4,5]));
console.log(filterOdds([1,7,4,5]));







function filterOdds(arr) {
    const result  = [];
     for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            
            result.push(arr[i]);
            
        }
     }
     return result;
}
console.log(filterOdds([1,2,3,4,5]))
console.log(filterOdds([1,7,4,5]))


/////
function isOdd(number) {
    return number % 2 !== 0;
}

function filterOdds(arr) {
    const result = [];
    for(let i =0; i < arr.length; i++) {
        if(isOdd(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterOdds([1,2,3,4,5]))
console.log(filterOdds([1,7,4,5]))


////
function isOdd(number) {
    return number % 2 !== 0;
}

function filterOdds(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(!isOdd(arr[i])) continue;
        result.push(arr[i]);
    }
    return result;
}
console.log(filterOdds([1,2,3,4,5]))
console.log(filterOdds([1,7,4,5]))
*/
/*
function isEven(number) {
    return number % 2 === 0;
}

function filterOdds(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(isEven(arr[i])) continue;
        result.push(arr[i]);
    }
    return result;
}
console.log(filterOdds([1,2,3,4,5]))
console.log(filterOdds([1,7,4,5]))
*/


////
/*!!!!!!!
function isEven(number) {
    return number % 2 === 0;
}

function filterOdds(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])); continue
        result.push(arr[i]);
    }
    return result;
}
console.log(filterOdds([1,2,3,4,5]))
console.log(filterOdds([1,7,4,5]))
*/



//////Напишите ф-ю, к-я проверяет, есть ли, число в массиве или нет. 
//Число и массив для проверки передабтся в функцию
/*
function contains(arr, number) {
    let result = true; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return result;
        }
    }
    return false;
}
console.log(contains([1,2,3], 3));
console.log(contains([1,2,3], 4));

////
function contains(arr, number) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] === number){
        return true;
        }
        
    }
    return false;
}
console.log(contains([1,2,3], 3));
console.log(contains([1,2,3], 4));
*/


//////Напишите ф-ю, к-я возвращает сумму всех чисел из диапазона чисел
//Диапазон задается начальным и конечным числом. Оба числа передаются в функцию
/*
function getRangeSum (start,end) {
    let result = 0;

    for (let i = start; i <= end; i++){
        result += i;
    }
    return result;
}
console.log(getRangeSum(0,3));
*/


///////Напишите ф-ю, к-я находит самое большое число в массиве
//Массив передается в функцию
/*
function getMax(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) continue;

        result =  arr[i];
    }
    return result;
}
 const arrA = [2,325,324,2];
 const arrB = [2,500,3240,2,2,10];

 console.log(getMax(arrA));
 console.log(getMax(arrB));
*/



///////Напишите ф-ю, к-я проверяет, является ли, переданное число 
//четным или нет.Число передается в функцию
/*
function isEven(number) {
    let result = false;

    if (number % 2 ===0) {
        result = true;
    }

    return result;
}
console.log(isEven(2));


////
function isEven(number) {
    const result = number % 2 === 0;
    return result;
}
console.log(isEven(2));
console.log(isEven(3));


function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));
*/



/////////Напишите ф-ю, к-я перемножает два числа между собой. 
//Числа передаются аргументами в функцию
/*
function multiplay(a,b) {
    return a*b;
}

const result = multiplay(2,3);
console.log(result);
*/



////////////
/*
function getSum (a, b) { 
    let result = a + b; 
    return result; 
}

let sum = getSum (1, 3); 
console.log(sum);
*/


//////////
/*
function sum(a, b) {
    let result = a + b;

    return result;
}
 console.log(sum (1, 3));
*/


/////////
/*
function log(text) {
    console.log(text);
}
log('текст, переданный в функцию');
*/



/*
let b = 3;

function myFunc2() {
    console.log('hello from myFunc2');
}

function myFunc1() {
    let a = 5;
    console.log(a);
    console.log(b);
    myFunc2();
}

myFunc1();

console.log(a);
console.log(b);
*/
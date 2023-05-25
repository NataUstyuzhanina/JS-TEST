console.log('Одеться'); 

console.log('Взять деньги');

console.log('Взять пакет');

console.log('Выйти на улицу');

console.log('Подойти к началу дороги');

console.log('Посмотреть налево');

const isRoadFree = false;

if (isRoadFree) {
    console.log('Идти прямо');

    // идти дальше по алгоритму
} else {
    console.log('Ждать 5 секунд');
}



const name = 'Sergey';
const surname = 'Dmitrievsky';
const fullname = buildFullName (name, surname);

function buildFullName (name, surname) {
    return `${name} ${surname}`;
}
console.log(buildFullName (name, surname));



function multiple (a,b){
    return a*b;
}
 console.log(multiple(2,3));


 const day = 02;
 const month = 12;
 const year = 2023;
 const fulldate = buildDate (day, month, year);

 function buildDate (day, month, year) {
    return `${day}/${month}/${year}`;
 }
 console.log(fulldate);


 const Age = 25;
 function isAdult(Age) {
    if (Age>=18){
        return 'верно' ;
    }
    else{
        return 'неверно';
    }
 }
 console.log(isAdult(Age))



const myAge = 18;
const canIGoDance = isAdult (myAge);

function isAdult (age) {
    return age >= 18;
}
console.log(canIGoDance);



const age = 3;
function isAdult (age) {
    return age >= 18;
}
console.log(isAdult (age))


const monthNumber = 5;
const monthName = getMonthByNumber(monthNumber);

function getMonthByNumber(monthNumber) {
    switch (monthNumber) {
        case 1: monthNumber = 'январь'; break
        case 2: monthNumber = 'февраль'; break
        case 3: monthNumber = 'март'; break
        case 4: monthNumber = 'апрель'; break
        case 5: monthNumber = 'май'; break
        case 6: monthNumber = 'июнь'; break
        case 7: monthNumber = 'июль'; break
        case 8: monthNumber = 'август'; break
        case 9: monthNumber = 'сентябрь'; break
        case 10: monthNumber = 'октябрь'; break
        case 11: monthNumber = 'ноябрь'; break
        case 12: monthNumber = 'декабрь'; break
    }
    return monthNumber;
}
console.log (monthName);



 let number = 1;
 switch(number){
    case 1: number = '+'; break
 }
 console.log(number);

// const valueRub = 35;
//  console.log(valueRub * 8)


 const valueRub = 350;
 const currency = 'EUR';
 const exchangeResult = convertRub (currency);

 function convertRub (currency) {
     switch (currency){
         case 'KZT': currency = valueRub * 5,56; break
         case 'USD': currency = valueRub * 12e-3; break
         case 'EUR': currency = valueRub * 12e-3; break
         case 'AED': currency = valueRub * 46e-3; break
     }
     return currency;
 }
 console.log(exchangeResult);


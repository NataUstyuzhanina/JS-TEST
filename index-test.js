let getNumbers = (function (){
  
  for( let i = 1; i <=10; i++){
    
      console.log(i);
    }
  }

  
)()

/*
///////
let number = -12;
do{
  console.log(number);
  number = number + 1;
}
 while (number <=20);
*/


/*
/////////
let num = -10;
while ( num <=10){
num = num +1;
console.log (num);
}
*/


/*
//////////
let number = -11;
let printResult = printNumber (number);

function printNumber (number){
do{
  number = number + 1;
  console.log(number) ;
 }
 while (number <= 10 && number >= -10); 
}
*/


/*
///////////
let getNumbers = (function (){
  
  for( let i = -10; i <= 10; i++ ){
    console.log(i);
  }
})()
*/


/*
/////////
let printNumbers = (function (){

  let a = -10;
  while (a < 10){
    a++;
    console.log(a);
    
  }
})()
*/


/*
/////////
function printNumbersByRange(start, end){
  for (let i = start; i <= end; i++){
    console.log(i);
  }
}
printNumbersByRange(-3, 2);
*/

/*
////
const name = 'Sergey';
const surname = 'Dmitrievsky';
const fullname = buildFullName (name, surname);

function buildFullName (name, surname) {
    return `${name} ${surname}`;
}
console.log(buildFullName (name, surname));
*/


/*
////
function multiple (a,b){
    return a*b;
}
 console.log(multiple(2,3));
*/


/*
////////
 const day = 02;
 const month = 12;
 const year = 2023;
 const fulldate = buildDate (day, month, year);

 function buildDate (day, month, year) {
    return `${day}/${month}/${year}`;
 }
 console.log(fulldate);
*/

/*
/////
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
*/


/*
//////
const myAge = 18;
const canIGoDance = isAdult (myAge);

function isAdult (age) {
    return age >= 18;
}
console.log(canIGoDance);
*/


/*
////
const age = 3;
function isAdult (age) {
    return age >= 18;
}
console.log(isAdult (age))
*/


/*
//////
const monthNumber = 13;
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
         default: return ('такого месяца нет')
     }
     return monthNumber;
 }
console.log (monthName);
*/


/*
//////
 let number = 1;
 switch(number){
    case 1: number = '+'; break
 }
 console.log(number);
 */



 //const valueRub = 35;
 //console.log(valueRub * 0,012)



 /*
 ////////
 const valueRub = 350;
 const currency = 'USD';
 const exchangeResult = convertRub (currency);

 function convertRub (currency) {
     switch (currency){
         case 'KZT': currency = valueRub * 5.56; break
         case 'USD': currency = valueRub * 0.012; break
         case 'EUR': currency = valueRub * 0.012; break
         case 'AED': currency = valueRub * 0.046; break
     }
     return currency;
 }
 console.log(exchangeResult);
*/


/*
//////
 const MONTH_NUMBER = 'Write the number of month';
  const WRONG_MONTH = 'This month does not exist';
 
  let monthNumber = parseInt(prompt(MONTH_NUMBER));
 
  const getMonthByNumber = (monthNumber) => {
 
    switch (monthNumber) {
      case 1:
        monthNumber ='January';
        break;
      case 2:
        monthNumber ='February';
        break;
      case 3:
        monthNumber ='March';
        break;
      case 4:
        monthNumber ='April';
        break;
      case 5:
        monthNumber ='May';
        break;
      case 6:
        monthNumber ='June';
        break;
      case 7:
        monthNumber ='July';
        break;
      case 8:
        monthNumber ='August';
        break;
      case 9:
        monthNumber ='September';
        break;
      case 10:
        monthNumber ='October';
        break;
      case 11:
        monthNumber ='November';
        break;
      case 12:
        monthNumber ='December';
        break;
 
      default:
        monthNumber = WRONG_MONTH
       
    }
    return monthNumber;
  }
 
  const getMonth = () => {
    const monthName = alert(getMonthByNumber(monthNumber));
    return monthNumber;
  }
  getMonth();
*/


/*
////////
 const myAdult = confirm('Вам есть 18 лет?');

  if (myAdult) {
    alert('Вход разрешен');
  }
  else {
    alert('Вход запрещен')
  }
 */


/*
//////
//const age = parseInt(prompt('Введите свой возраст'));

    //console.log(parseInt(age));
    
   function isAdult(age) {
    return age >= 18;
  }

  if (isAdult(age)) {
    alert('Вход разрешен');
  }
  else {
    alert('Вход воспрещен');
  }
*/



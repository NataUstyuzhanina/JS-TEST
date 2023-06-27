////////Напишите функцию printNumbers, которая выводит в консоль числа от -10 до 10.
/*
let getNumbers = (function (){
  
    for( let i = -10; i <= 10; i++ ){
      console.log(i);
    }
  })()
  */



  ////////Напишите функцию printNumbersByRange(start, end), которая выводит в консоль числа 
  //в диапазоне. Диапазон задается начальным и конечным числом. 
  //Например, в результате вызова функции с параметрами -3 и 2 (printNumbersByRange(-3, 2) в консоль выводятся числа: -3, -2, -1, 0, 1, 2.
/*
function printNumbersByRange(start, end){
    for (let i = start; i <= end; i++){
      console.log(i);
    }
  }
  printNumbersByRange(-3, 2);
  */




  ////////Напишите функцию calculateNumbersSum(numbers), которая на вход принимает массив чисел 
  //и возвращает сумму этих чисел. Например, calculateNumbersSum([0, 1, 2, 4, 8] возвращает 15.
/*
  function calculateNumbersSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum += numbers[i];
    }
    return sum;
  }

console.log(calculateNumbersSum([0,1,2,4,8]));
*/




/////////Напишите функцию includes(numbers, number), 
//которая на вход принимает массив чисел и число. Если число есть в массиве чисел, 
//функция возвращает true, иначе - false.
/*
function includes(numbers, number) {

  for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] === number){
      return true;
    }
    
  }
  return false; 

}
console.log(includes([1,2,3],3));
console.log(includes([1,2,3],7));
*/




////////Напишите функцию createPerson(name, surname, age). 
//Функция принимаем имя человека, фамилию и возраст. 
//Функция возвращает объект с полями name, surname, age.
/*
function createPerson (name, surname, age) {
  return {
    name,
    surname,
    age
  }
}

const person = createPerson ('John', 'Smith', 23);
console.log (person);
*/





////////Напишите функцию findOldest(people). Функция принимает массив из объектов. 
//Каждый объект создайте через функцию createPerson. 
//Функция возвращает имя самого старшего человека.
/*
function createPerson({name, age}) {
  return {
    name,
    age,
    getName: function() {
      return this.name;
    },
    getAge: function() {
      return this.age;
    }
  }
}

const people = [
  createPerson({name:'John', age:25}),
  createPerson({name:'Mary', age:33})
]


function findOldestPeople (people) {
  let index = 0;
  let maxAge = people[0].getAge();

  for ( let i = 0; i < people.length; i++) {
    if (people[i].getAge() <= maxAge) continue;
    
   maxAge = people[i].getAge();
   index = i;
  } 
  return index;
}

const maxAgeIndex =  findOldestPeople(people);

console.log (people[maxAgeIndex].getName());
*/
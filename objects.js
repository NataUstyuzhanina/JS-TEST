////////Создайте объект me с полями name, age. Добавьте объекту метод sayHello, к-й
//выводит в консоль фразу: "Привет, Я - {name}, мне {age}"

/*
////
const me = {
    name:'Сергей',
    age: 29,
    sayHello: function() {
        console.log(`Привет, Я - ${this.name}, мне ${this.age}`);
    }
}
me.sayHello();


////
const me = {
    name: 'Сергей',
    age: 29,
    buildHelloText: function() {
        return `Привет, Я - ${this.name}, мне ${this.age}`;
    }
}
console.log(me.buildHelloText());
*/



////////Создайте ф-ю createPerson, к-я возв-т объект с полями name, age
//Значения полей передаются в параметрах функции
/*
function createPerson(name, age) {
    return  {
        name,
        age
    }
}
const name  = 'Сергей';
const age = 29;
const me = createPerson(name, age);

console.log(me);



////
function createPerson (person) {
    return {
        name: person.name,
        age: person.age,
        buildHelloText: function(){
            return `Привет, я - ${this.name}, мне ${this.age}`;
        }
    }
}
const me = createPerson({
    name: 'Сергей',
    age: 29
}) 

console.log(me.buildHelloText());
console.log(me);



////
function createPerson({name, age}) {
    return {
        name, 
        age,
        getName: function() {
            return this.name;
        },
        getAge: function() {
            return this.age;
        },
        buildHelloText: function(){
            return `Привет, я - ${this.name}, мне ${this.age}`;
        }
    }
}

 const me = createPerson ({
    name:'Сергей',
    age: 29
 })

 console.log(me.buildHelloText());
 */



 /////////Создайте массив (7 эелементов) из объектов person. Исп-те ф-ю из задания 2
 //Заполните объекты произвольными данными. Найдите самого старшего человека из массива
 //В результате выведите в консоль фразу: "{name} самый мудрый, ему {age}"

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
        },
        buildHelloText: function(){
            return `Привет, я - ${this.name}, мне ${this.age}`;
        }
    }
}
 const people = [
    createPerson ({name: 'Sergey', age: 29 }),
    createPerson ({name: 'Diana', age: 26 }),
    createPerson ({name: 'Mike', age: 25 }),
    createPerson ({name: 'Alex', age: 17 }),
    createPerson ({name: 'Ann', age: 27 }),
    createPerson ({name: 'Mary', age: 39 }),
    createPerson ({name: 'Bill', age: 40 }),
 ]

 function buildText({name,age}) {
    return `${name} самый мудрый, ему ${age}`;
 }

 function getMaxAgeIndex(people) {
    let index = 0;
    let maxAge = people[0].getAge();

    for (i = 0; i < people.length; i++){
        if (people[i].getAge() <= maxAge) continue;
        
        maxAge = people[i].getAge();
        index = i
    }
    return index;
 }

 const maxAgeIndex = getMaxAgeIndex(people);

console.log( buildText ({
    name: people[maxAgeIndex].getName(),
    age: people[maxAgeIndex].getAge()
}))
*/
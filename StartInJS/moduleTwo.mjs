/* ___________________________MY START IN JavaSctript________________________*/

/*                           ====== Basics ======

const objectA = {
    a: 10,
    b: true
}

const copyObjectA = objectA
copyObjectA.a = 'abc'
console.log(copyObjectA.b)

const b = () => {
    console.log("It`s b")
}
b()

const myCity = {
    city: 'New York',
    info: {
        size: 10000,
        state: 'New Yourk'
    }
}

console.log(myCity.info.size)

myCity.popular = true
console.log(myCity)

myCity.county = 'USA'
console.log(myCity)

delete myCity.county
console.log(myCity)

const countProperty = 'Count'
myCity[countProperty] = 1000
console.log(myCity)

delete myCity[countProperty]
console.log(myCity)

console.log("======================================")

const name = 'Nikita'
const age = 17

const userProfile = {
    name,
    age,
    userWork: false,
    cityGreeting: function() {
        console.log('Greeting!')
    }
}
console.log(userProfile)
userProfile.cityGreeting()

*/

/*                           ====== JSON ======

const post = {
    postTitle: 'My post',
    postLikes: 5
}
JSON.stringify(post)

const postStringified = JSON.stringify(post)
JSON.parse(postStringified)
console.log(postStringified)
*/

/*                           ====== Copy by value ======
const a = 10
let b = a // copy by value
b = 30
console.log(a)
console.log(b)
*/

/*                           ====== Mutation ======
const person = {
    name: 'Bob',
    age: 21
}

// const person2 = person // copy by reference
const person2 = Object.assign({}, person)

person2.age = 26
person2.isAdult = true

console.log(person.age) // 21
console.log(person.isAdult) // undefined
console.log(person2.age) // 26
console.log(person2.isAdult) // true

const person3 = {
    name: 'Bob',
    age: 21,
    appereance: {
        skin: 'white'
    }
}

const person4 = {...person3 }
person4.name = 'Nikita'

console.log(person3.name)
console.log(person4.name)

const person5 = {
    name: 'Anya',
    age: 21,
    appereance: {
        skin: 'white'
    }
}

const person6 = JSON.parse(JSON.stringify(person5))
person5.name = 'Zhenya'

console.log(person5.name)
console.log(person6.name)
*/

/*                           ====== Functions ======
let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 8
b = 12
sum(a, b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.dir(myFn)

*/

/*                           ====== Isn`t correct ======
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

increasePersonAge(personOne)
console.log(personOne.age)
*/

/*                           ====== Is correct ======
const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 1
    return updatePerson
}

const updatePersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatePersonOne.age)
*/

/*                           ====== Function in Function ======
function anotherFunction() {
    console.log("anotherFunction")
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)


function printMyName() {
    console.log('Nikita')
}

setTimeout(printMyName, 10000) // 10 seconds

*/

/*                           ====== Strict ======
'use strict'

function myFunction() {
    a = true

    console.log(a)
}

myFunction()

console.log(a)
*/

/*                           ====== operator ... ======
const name = 'Nikita'
const city = 'Kyiv'

const greeting = ` ${name} leave in ${city}`

console.log(greeting)
*/

/*                           ====== Anonim functions ======
setTimeout(function() {
    console.log("Delaed message")
}, 1000)

*/

/*                           ====== ()=> functions ======
const sumTwoValues = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(sumTwoValues(5, 3))

//                                 EASY SYNTAXIS 

(a,b) => a + b 

a => {
    // body
}
*/
/*                           ====== ()=> function with value ======
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

let firstResult = multByFactor(10, 2) // 20
let secontResult = multByFactor(5) // 5

console.log(firstResult + " " + secontResult)
*/

/*                           ====== Function with => to obj ======
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Nikita',
}
newPost(firstPost)
console.table(firstPost)
*/

/*                           ====== Try Catch ======
const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.log(error) // #1
    console.log(error.message) // #2
}
console.log('Continue...')
*/

/*                           ====== Instructions ======
// Instuctions ends on ; and don`t return any variable or value

let a;
const b = 5;

if (a > b) {
    console.log('A bigger');
}

for (let i = 0; i++; i < 5) {
    console.log(5);
}

function myFn(a) {
    console.log(a);
}

const b = true;
let c = 10;

myFn(2 + 3)
myFn(b)
myFn(c = c + 1)
*/

/*                           ====== Array ======
const myArray = [0, 1, 2, 3]
console.log(myArray)
    // [0, 1, 2, 3]

const myArray2 = new Array(4, 5, 6, 7)
console.log(myArray2)

const myArray3 = [1, true, 'Nikita']
console.log(myArray3.length)

const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

const myArray4 = [3, false, 'b']
console.log(myArray4)
console.log(myArray4[0]) // 3
console.log(myArray4[2]) // b

console.log(myArray4.length) // 3

myArray4.push(13) // Adding to the end 13
console.log(myArray4)

myArray4.pop() // Deleting from end 13
console.log(myArray4)

myArray4.unshift('Putin Huylo') // adding to the start 'Putin Huylo'
console.log(myArray4)

myArray4.shift() // deleting from the start 'Putin Huylo
console.log(myArray4)
*/

/*                           ====== forEach ====== 
const myArray = [1, 2, 3]
console.log(myArray)

const arrayResult = myArray.forEach((arrayElement) => console.log(arrayElement * 2)) // стрелочная callback функция

console.log(arrayResult) // undefined - потому что forEach не обязан возвращать что-либо
console.log(myArray) // [1, 2, 3]

// forEach перебирает все элементы и можно выполнить действия с каждым элементом массива
*/

/*                           ====== Map ====== 

const myArray = [1, 2, 3]
console.log(myArray)

const newArray = myArray.map((element) => {
    return element * 3
})

console.log(newArray) // [3, 6, 9] 
console.log(myArray) // [1, 2, 3] 

// map создаёт новый массив, не меняя оригинальный
*/

/*                           ====== Дестректуризация ====== 

// Раздление объекта|массива на переменные

const userProfile = {
    name: 'Nikita',
    commentsQty: 23,
    hasAgreement: false,
}

const { name, commentsQty } = userProfile
const { hasAgreement } = userProfile

console.log(name)
console.log(hasAgreement)

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana


const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile)) 
*/

/*                           ====== if else ====== 
let val = 6

if (val > 5) {
    val += 20
} else {
    console.log("Try again")
}

console.log(val) // 30

const person = {
    age: 20,
    name: 'Nikita'
}

if (!person.name) {
    console.log("Name is undefined")
} else if (person.name) {
    console.log(`User name ${person.name}`)
} else {
    console.log("WTF")
}

// !undefine === true

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Number is not positive'
    }

    return a + b
}

const c = sumPositiveNumbers(54, 7)
console.log(c)
*/
/*                           ====== Switch ====== 

const month = 1

switch (month) {
    case 1:
        console.lot("January")
        break
    case 2:
        console.log("February")
        break
    default:
        console.log("Is`t January or Februart")
}
*/

/*                           ====== Ternarn Operator ====== 

const a = 5
const b = 4

a > b ?
    console.log(a) :
    console.log(b)

value = -5
const res = value >= 0 ? velue : -value 
*/

/*                           ====== for ======
const myArray = ['First', 'Second', 'Third']

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

myArray.forEach((element, index) => { console.log(element, index) })
 */

/*                           ====== While ====== 
let i = 0

while (i < 5) {
    console.log(i)
    i++
}
*/

/*                           ====== Do while ====== 

do{
    ...
}while()
/*

/*                           ====== For in ======
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (key in myObject) {
    console.log(key, myObject[key])
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

console.log(Object.keys(myObject))
console.log(Object.values(myObject))
*/

/*                           ====== For of ======
const line = 'JavaScript'
const myArray = [true, 10, 'abc', null]

for (const letter of line) {
    console.log(letter)
}

for (const element of myArray) {
    console.log(element)
}

// for of не для объектов
*/

/*                           ====== Modules ======
 
import {
    sumMe as sum,
    mult
} from './moduleOne.mjs'

console.log(sum(2, 3))
console.log(sum(14, 564))

const c = mult(5, 3)
console.log(c)

import {
    one as oneReadme,
    two
} from './moduleOne.mjs'

console.log(oneReadme)
console.log(two)
*/

/*                           ====== Classes ====== 

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) { // Методы static не наследуются 
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First Comment')

firstComment.upvote()
console.log(firstComment.votesQty) // 1

firstComment.upvote()
console.log(firstComment.votesQty) // 2

// instanceof проверка на наследование

firstComment instanceof Comment // true
firstComment instanceof Object // true

firstComment instanceof Array // false

console.log(firstComment.hasOwnProperty('text'))
console.log(firstComment.hasOwnProperty('votesQty'))

console.log(Comment.mergeComments('First Comment. Second.', 'Second comment.')) // Конкатенация


class NumbersArray extends Array {
    sum() {
        return this.reduce((element, result) => result += element, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
console.log(myArray.sum())

console.log(NumbersArray.prototype)
console.log(Array.__proto__)
console.log(NumbersArray.prototype === Array.__proto__)
*/

/*                           ====== Promise ====== 



const myPromise = new Promise((resolve, reject) => {

    // Выполнение асинронных действий

    // Внутри этой фу
    myPromise.then((value) => {
        // В случае успешного исполнения Промиса. 
        // Значение Value - значение, переданное в вызове функции resolve внутри Промиса


    })
    myPromise.catch((error) => {
        // Действия в сулчае отклонения Промиса
        // Знаение error - значение, переданное в вызове функции reject внутри Промиса


    })
});


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))

    
// Создание функции
const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )
    // Вызов функции
getData('https://jsonplaceholder.typicode.com/todos/')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
*/

/*                           ====== Async/Await ====== 

*/
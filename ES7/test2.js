'use strict';

const name='Raj';
const age= 35;

// const user = {
//  name: name,
//  age: age
// }

// vs

//Single valued properties
const user = {
    name,
    age
}

//Destructing syntax - start
const userObj = {
    nameObj: 'ABC',
    ageObj: 25
};

//Access values from Objects
//userObj.nameObj OR userObj['nameObj']

//Destructuring syntax
const {nameObj} = userObj;
console.log(nameObj);
//https://hackernoon.com/understanding-the-destructuring-assignment-syntax-in-javascript-c3bf8e1e908a
//Destructuring syntax - end

console.log('Object',user);
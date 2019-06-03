//Arrow functions
// => Fat arrows amd Arrow operator

//Function can be declared in any ways

//function function_name ();
// OR
//var fun_name = function() {}

//https://www.geeksforgeeks.org/arrow-functions-in-javascript/
//http://exploringjs.com/es6/ch_arrow-functions.html
let obj =
{
    name: 'Raj',
    age: 21,
    greeting: function()
    {     
        console.log(this);
        setTimeout(() =>
        {
            console.log('Hello: ' + this.name);   
        },1000);
    }
}


obj.greeting();
// Do not use arrow function in Dynamic functions ex: addEventListerner

// Return values ---> different syntax
//https://jaketrent.com/post/javascript-arrow-function-return-rules/
const squareA = (num) => num * num;

const test = () =>
{    
    console.log('test 1');
    console.log('test 2');
}

function squareB (num)
{
    return
    {
        number: num;
        sq: num*num
    }
}

const squareC = (num) => 
(
    {
        number: num,
        sq: no * no
    }
)
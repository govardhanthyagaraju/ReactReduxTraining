'use strict';

console.log('app started');

//Call Back Function
//https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
//Read ----> Callack Queue and Event Loop
for(let i=0;i<10;i++)
{
        setTimeout(function(){
            console.log('new variables!!',i);
        },i*100);   
}

const name='test';
//Uncaught TypeError: Assignment to constant variable.
name='new';

console.log('app closed');
//https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
//Read --> Closures
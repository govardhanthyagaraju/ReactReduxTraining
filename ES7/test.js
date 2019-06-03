'use strict';

console.log('app started');

//Call Back Function
//https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
//Read ----> Callack Queue and Event Loop
for(var i=0;i<10;i++)
{
   (
    function (j) 
    {
        setTimeout(function(){
            console.log('timeout!!',j);
        },j*100);
    }
   )(i);
}

console.log('app closed');
//https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174
//Read --> Closures
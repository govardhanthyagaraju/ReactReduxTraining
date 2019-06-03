//Promises: Ensures only response for one 
//request (either success or failure) and requests be will
//in sequenctional order

//Normal: Request --> Server --> Response
// return sequencing problem eg: Searching SAMSUNG in a textbox, 
//Read: Call back queue and callback hell

//ajax with callbacks
// https://javascript.info/promise-basics
// https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138

function ajaxWithPromise(success,failure)
{
   return new Promise(
       (resolve,reject) =>
       {
        setTimeout(() => resolve('Call Succeeds'),3000);
        setTimeout(() => reject('Call Failed'),5000);
       }
   )
}

ajaxWithPromise()
  .then(
    (data)=>
    { 
        console.log('success',data)
    }
  )
  .catch
  (
        (err) =>
        { 
            console.log('error',err)
        }
   );

//Promises: Ensures only response for one 
//request (either success or failure) and requests be will
//in sequenctional order

//Normal: Request --> Server --> Response
// return sequencing problem eg: Searching SAMSUNG in a textbox, 
//Read: Call back queue and callback hell

//ajax with callbacks

function ajaxWithCallback(success,failure)
{
    setTimeout(() => success('Call Succeeds'),3000); // Invoke success function after 3 seconds
    setTimeout(() => failure('Call Failed'),5000);
}

ajaxWithCallback(
    (data)=>
    { 
        console.log('success',data)
    },
    (err) =>
    { 
        console.log('error',err)
    }
);

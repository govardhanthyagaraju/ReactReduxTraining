//Arrow functions
// => Fat arrows amd Arrow operator

//Function can be declared in any ways

//function function_name ();
// OR
//var fun_name = function() {}


let obj =
{
    name: 'Raj',
    age: 21,
    greeting: function()
    {
        let self = this; //lexical scoping 
        setTimeout(function()
        {
            console.log('Name: ' + self.name);   
        },1000);     
    }
}


obj.greeting();
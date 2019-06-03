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
        //let self = this; 
        setTimeout(function()
        {
            console.log('Name: ' + self.name);   
        }.bind(this),1000);     // Function binding
    }
}


obj.greeting();
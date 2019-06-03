//Classes

//http://qnimate.com/javascript-class-keyword/

class Employee
{
    empName;
    constructor()
    {
        console.log('Constructor called');
    }
    
    addEmpName(name)
    {
        let age = 35;
        this.empName = name + ' ' + age;
    }
}

const emp = new Employee();
emp.addEmpName('Raj');
console.log(emp.empName);
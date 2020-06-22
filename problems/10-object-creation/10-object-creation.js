/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objEmployee1 = {
    name : "Mark",
    age : "34",
     
employeeinfo : function(){
    console.log("Employee name " + this.name);// employee  name
    console.log("Employee age " + this.age);// employee age
  }
}
let  objEmployee2 = {
    name : "John",
    age : "50",
     
employeeinfo : function(){
    console.log("Employee name " + this.name);// employee  name
    console.log("Employee age  " + this.age);// employee age
  }
}

var Company = function( name,age){
      
    this.name = name,
    this.age = age,
     console.log("Employee Name" + this.name);
     console.log("Employee age " + this.age);

   }

var objEmployee = new employee(sarah,37);
var objEmployee1= new employee(william,40);
var objEmployee2= new employee(Jerry,29);

objEmployee.employeeinfo(jack,36);
objEmployee2.employeeinfo();





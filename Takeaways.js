var empcode ='E1001';
console.log('Empcode :'+Empcode);

//JS is case sensitive

//This is used for commenting in js

function add_numbers(x, y) 
{
  var local_result = x + y;
  console.log("The local result is: " + local_result);
}
add_numbers(4, 5);
console.log(local_result);

//var with global scope

function add_numbers(x, y) 
{
  var local_result = x + y;
  console.log("The local result is: " + local_result);
}
add_numbers(4, 5);
console.log(local_result);

//Var with local scope. Here it will be an error as local_result is not defined outside the func

//Creating an empty array
var fruits = []; 
//Creating an array with four elements.
var fruits = ["Orange", "Apple", "Banana", "Mango"]
//Display  an array element
console.log(fruits[1]);
//No need to specify all elements in an array literal
var fruits = ["Orange", , "Banana", "Mango"]
console.log(fruits[1]);

//if string is blank in array, then undefined 


if (isArray) {
  console.log('Yes it is an array!');
}

//Empty string (""), number(0), undefined, null are false value.
var name = '';
if (name) 
  console.log('My name is : ' + name);

var rollno = 0;
if (rollno) 
  console.log('Your roll no. is '+ rollno);

var address;
if (address) 
  console.log('Your name is ' + firstName); 

//If comparison or logical operator is not used JS tries to figure out if the value is "truth".
//var isArray = true;

var student = {
  stu_class: "VI",
  stu_name: "Simon",
  stu_roll_no: 1,
  marks: { language: 75, math: 90 }
};
console.log(student.stu_name);
console.log('Class: '+student.stu_class +' Roll No. : '+student.stu_roll_no);
console.log('Marks in Math :'+student.marks.math );

//object literal is like a dictionary and has key value pairs and enclosed in {}

string1 = "w3resource.com" 
string2 = 'w3resource.com'
string3 ="First line \n Second line"
string4 = "google" + ".com"
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

//string literal is enclosed in '' or ""








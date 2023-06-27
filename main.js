//to include HTML tag in JS

document.write("<br><h1>Hello World</h1><br>");

document.write ("<i>Welcome to programming</i><br>");

//Single line comment

/*
Multi line comment
*/

//variable

/*
Variable name must begin either with a letter, underscore ‘_ ‘ or a dollar sign ‘ $ ‘
The first character must not be a number or digit
The subsequent character after the first one can be letters, digits,underscore or dollar sign, and anycombination of those.

Variable names that are a composition of two words, we can use a convention called camel case.

In most programming languages, the data type is strongly fixed and cannot be changed after its declaration, but in JavaScript, this is not the
case; we can set the variable to any type we want.

In ES2015 or ES6, we have two new ways to create variables, and those are by using the “let” and “const” keywords.

When we have a variable declared outside the function body, that variable belongs to a global scope. The global scope variables are
part of the global object, and we can access that object using the globalThis keyword.

Const should be declared and initialized.

Another important point to understand is that you can declare the same variable multiple times using var, so redeclaring
and re-initializing is not a problemwith var, but this will be a problem if we use “let” and “const.”

Difference between and Var and let
The block scope is ignored with the var keyword, and changing the value will affect the other variables under the same
name. With the let keyword, the variable created inside the block is treated as a different variable with a new value. */

var firstWord = "hello";
var firstWord = "Var Variable!<br>";
document.write(firstWord);


let secondWord ="Welcome";

//let secondWord ="World";  (Uncaught SyntaxError: redeclaration of let secondWord)

secondWord="let variable";

document.write(secondWord);

const thirdWord = "<br>const variable";

//thirdWord = "Fourth"; (Uncaught TypeError: invalid assignment to const 'thirdWord')

document.write(thirdWord);

//Data Type

/*
JavaScript types can belong in two categories:
Primitive types
Object types

JavaScript primitive types can be:
Strings
Numbers
Boolean values (Booleans for true or false values)
Bigint
Undefined and null are regarded as special values
Symbol

Primitive values are immutable, and nonprimitive values are mutable after creation.

The primitive types are stored by value, and the non-primitive (objects) are stored by reference.

*/

//string
var a = "<br>word";

document.write(a);

document.write("<br> Type of word is ");

document.write(typeof a);

//number
a =34;
document.write("<br> Type of 34 is ");

document.write(typeof a);

//boolean
a =true;
document.write("<br> Type of true is ");

document.write(typeof a);

//undefined
var b;
document.write("<br> Type of b is ");

document.write(typeof b);

//array
var c= ["a","b","c"];

document.write("<br> Type of c is ");

document.write(typeof c);

//


//object
var d= {
    name: "Xyz",
    country: "Abc"
}

document.write("<br> Type of d is ");

document.write(typeof d);


/*
Arithmetic Operators

+,-,*,/,**,%,++,--

*/

//Addition
var num1=2;
var num2=5;
var num3 = num1+num2;
document.write("<br>",num3);

//Substraction
var num1=2;
var num2=5;
var num3 = num2-num1;
document.write("<br>",num3);

//multiplication
var num1=2;
var num2=5;
var num3 = num2*num1;

document.write("<br>",num3);

//Division
var num1=2;
var num2=5;
var num3 = num2/num1;
document.write("<br>",num3);

//Modulos
var num1=2;
var num2=5;
var num3 = num2%num1;
document.write("<br>",num3);

//Exponential
var num1=2;
var num2=5;
var num3 = num2**num1;
document.write("<br>",num3);


//increment
var num1=5;
num1++;
document.write("<br>",num1);

//decrement

var num1=5;
num1--;
document.write("<br>",num1);

/*
Assignment Operators
=,+=,-=,*=,/=,%=,**=
*/

var i=10;
var j=20;
i+=j;
document.write("<br>",i);
i-=j;
document.write("<br>",i);
i*=j;
document.write("<br>",i);
i/=j;
document.write("<br>",i);
i%=j;
document.write("<br>",i);
i**=j;
document.write("<br>",i);

//console

var k=10;
console.log(k);
console.log([1,2,3]);
console.table([2,2]);
console.time("test")
console.error("Syntax Error");
console.warn("This can be ignored");
console.timeEnd("test");
//console.clear();

/*
Comparision Operators or relational operators

>,<,==,===,!=,!==,<=,>=

*/

var g=10;
var h=15;
document.write("<br>",g<=h);
document.write("<br>",g>=h);
document.write("<br>",g>h);
document.write("<br>",g<h);
document.write("<br>",g!=h);
document.write("<br>",g==h);
var h=10;
document.write("<br>",g==h);
var h="10";
document.write("<br>",g===h);
document.write("<br>",g!==h);


/*
if statement
Syntax:
if (expression)
statement
*/

var x=11;
if(x>=10){
    document.write("<br>X is greater");
}

/*
Logical Operators

! (Logical NOT)
&& (Logical AND)
|| (Logical OR)

*/

if (x>10 && x==11){
    document.write("<br> Condition True");
}

var y=20;
if (x>10 || y==10){
    document.write("<br> Condition True");
}

if (!x>10){
    document.write("<br> Condition True");
}


/* Shift operators 

left shift <<

right shift >>
*/

var a = 18, b=5;
console.log("a<<b "+(a<<b));// 576
console.log("a>>b "+(a>>b));//0

/*Bitwise Operators

&, |,^,~

*/
var a=10, b=30;
console.log("a&b "+(a&b));//10
console.log("a|b "+(a|b))//30
console.log("a^b "+(a^b))//20
console.log("~a "+(~a))//-11
/*
if else statement
syntax:
if (condition)
{
statement block 1
}
else
{
statement block 2
}
*/
if (x<10 && x==11){
    document.write("<br> Condition True");
}
else{
    document.write("<br> Condition False");
}

/*
ifelseif statement
syntax:

if (condition)
{
statement block 1
}
elseif
{
statement block 2
}
else{
statement block 3
}
*/

if (x<10 && x==11){
    document.write("<br> Condition True");
}
else if (x<10){
    document.write("<br> Condition False");
}else{
    document.write("<br> Third statement executes");
}

/*
ternary(conditional) operator:

condition ? expressionIfTrue : expressionIfFalse
 */

(x<20) ? document.write("<br> True") : document.write("False");

/*
Switch Syntax
Switch(expression)
{
case condition1: statement; 
break;
case condition2: statement; 
break;
default:statement
}
*/

var day =7;

switch(day){
    case 0: document.write("<br>Monday");
    break;
    case 1: document.write("<br>Tuesady");
    break;
    case 2: document.write("<br>Wednesday");
    break;
    case 3: document.write("<br>Thursday");
    break;
    case 4: document.write("<br>Friday");
    break;
    case 5: document.write("<br>Saturday");
    break;
    case 6: document.write("<br>Sunday");
    break;
    default: document.write("<br>Enter the valid day");
}

/*Alert box

alert("Welcome to javascript tutorial");

var a=10;
var b=30;

if( a>b)
{
    alert("A is greater");
}else{
    alert("B is greater");
}*/


/*
Confirm Box

var a = confirm("do you like this website");

if(a){
    alert("Thanks");
}
else{
    alert("Sorry");
}*/


/*
Promt Dialogue Box

var z=prompt("Enter your name");

if(z){
    document.write("<br>Welcome",z);
}
else{
    alert("Please enetr the name");l
}*/


/*
FUNCTIONS
DECLARING A FUNCTION:
function name(parameter1,…parameter2)
{
//function body

name()--calling a function
}*/

function hello(){
    document.write("<br>Hello Everyone!!");
}
hello();

/*
Functions with parameters
*/

function sum(a,b){
    document.write("<br>",a+b);
}

sum(10,20);
sum(30,60);

/*
Functions with return statements
*/

function sub(a,b){
    return b-a;
}

var c= sub(20,80);

document.write("<br>",c);

/*
Global and Local Variable
*/ 


var a="mango"; //global

function fruit(){
    var b="orange";// local
    document.write("<br>",a);
}
fruit();
document.write("<br>",b);


/*
 JS Events

click(onclick), double click(ondblclick), right click(oncontextmenu), mouse hover(unmouseenter), mouse out(onmouseout), 
mouse down(onmousedown), key press(onkeypress), key up(onkeyup), load(onload), unload(onunload), resize(onresize), 
scroll(onscroll), mouse up(onmouseup)
*/

function helloEvent(){
    document.write("<be>Hello Everybody");
}

/*
while loop
while(condition)
{
code block to be executed
}
*/

var a=1;

while(a <= 10){
    document.write("<br>Hello",a);
    a++;
}


/*
do/while Syntax
do{//statement
//code
}while(condition)
*/

var a=5;
do{
    document.write("<br>",a);
    a++;
}while(a<=10);


/*
for loop
syntax:
For (initialization; condition; increment) {
// code block to be executed
}
*/

for(var i=1; i<=10;i++){
    document.write("<br>Hi");
}

/*
Break and continue
*/

for(var i=1; i<=10;i++){
    if(i == 3)
    {
    document.write("<br>Hey : ", i);
    continue;
    //break;
    }
    document.write("<br>Number : ", i);
}


/*
even and odd number
*/

for(var j=1; j<=10;j++){
    if(j%2 == 0){
        document.write("<br>"+j+" is an EVEN NUMBRER<br>");
    }else{
        document.write("<br>"+j+" is ODD NUMBRER<br>");
    }
}

/*
Nested loop

for(){
    for(){
        
    }
}
*/

for(var i=1; i<=100; i=i+10){
    for (var j=i; j<i+10;j++){
            document.write(j + " ");
    }
    document.write("<br>");
}

//nested loop examples

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(j+" ");
    }
    document.write("<br>");
}

for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        document.write(i+" ");
    }
    document.write("<br>");
}

//Arrays

var a1=[10,20,30,40,50];
var sum=0;
for(var a=0;a<5;a++){
    document.write("<br>",a1[a]);
    sum+=a1[a];
    document.write("<br>",sum)
}

/*Array Methods
usning constructor
*/

var a= new Array(3);
/*a[0]="Hello";
a[1]="20";
document.write("<br>",a);*/

/*for(var b=0;b<3;b++){
    a[b] = prompt("enter the value");
}
for(var c=0;c<3;c++){
    document.write("<br>",a[c]);
}*/

/* This keyword 

this refers to the current object

*/

function exampleFunc(){
    console.log(this);//Window object
}
exampleFunc();

let objExample = { exampleFunc : function(){
    console.log(this);//Object { exampleFunc: exampleFunc() }
}};
objExample.exampleFunc();

/*Arrow functions\

arrow operator ‘=>’.

let addFun = a => a + 100;

*/



/*
Multi Dimensional Array
*/

var b =[
    [10,20],[30,40],[50,60]
];

document.write("<table border='1px'>");
for(var c=0; c<b.length;c++){
    document.write("<tr>");
    for(var d=0; d<b[c].length;d++){
        document.write("<br><td>"+b[c][d]+"</td>");
    }
    document.write("</tr>")
}
document.write("</table>");

//Modifying and deleting array elements

var f= ["name",19,"BCom"];
f[1]=20; // modify
document.write("<br>",f);//name,20,BCom
 delete f[0];
 document.write("<br>",f);// ,20,BCom //f[0] is undefined

 /*Array Methods
 
 sort(),reverse(),pop(),push(),shift(),unshift(),concat(),join(),slice(),splice(),isArray(),indexOf(),lastindexOf(),entries(),every(),
 filter(),find(),findIndex(),includes(),some(),forEach(),toString(),valueOf(),fill().

 */

 //Sort() Method

 var s=["Sanjay","Aman","Reya","Naman"];
 s.sort();
 document.write("<br>",s);//Aman,Naman,Reya,Sanjay

 //Reverse()

 s.reverse();
 document.write("<br>",s);//Sanjay,Reya,Naman,Aman

 //pop() removes the last record of an array
 s.pop();
 document.write("<br>",s);//Sanjay,Reya,Naman

 //push() adds a record at the last index of an array

 s.push("Ajay");
 document.write("<br>",s);//Sanjay,Reya,Naman,Ajay

 //shift() to delete the first record of an array
 s.shift();
 document.write("<br>",s);//Reya,Naman,Ajay

 // unshift () to add at the first index of an array
s.unshift("Sajan");
document.write("<br>",s);//Sajan,Reya,Naman,Ajay

//concat() to merge 2 arrays
var p=["lakhan","10","20"];
var z=s.concat(p);
document.write("<br>",z);//Sajan,Reya,Naman,Ajay,lakhan,10,20

//join() joins the entire array content into to one string
var y = s.join("/");
document.write("<br>",y);//Sajan/Reya/Naman/Ajay

/*slice to remove required array items and add it to new array
syntax: slice(start, end);*/

var g=["sun","mon","tue","wed","thurs","fri","sat"];
var h=g.slice(1,4); // from 1st index to 3rd index
var z= g.slice(-4,-1);
document.write("<br>",h);//mon,tue,wed
document.write("<br>",z);//wed,thurs,fri

/*splice() to add elements to a given postion to the existing array by deleting the esiting elements or simply adding

Syntax: splice(index, howmany delete(optional),"new value");
*/

g.splice(3,0,"day","month");
document.write("<br>",g);//sun,mon,tue,day,month,wed,thurs,fri,sat

g.splice(3,2,"abc");
document.write("<br>",g);//sun,mon,tue,abc,wed,thurs,fri,sat

g.splice(3,2);// to delete the elemets
document.write("<br>",g); //sun,mon,tue,thurs,fri,sat

//isArray()

var k =10;
var n= Array.isArray(g);
document.write("<br>",n);//true
var l =Array.isArray(k);
document.write("<br>",l);//false

if(Array.isArray(GamepadEvent) == true){
    document.write("<br>It is an array");
}
else{
    document.write("<br>Not an array");
}

//indexOf() syntax: indexOf("Serach Item", start)
var g=["sun","mon","tue","mon","thurs","fri","sat"];
var h = g.indexOf("mon");//1
document.write("<br>",h);
var h = g.indexOf("mon",2);//3
document.write("<br>",h);
var h = g.indexOf("mons");// returns -1
document.write("<br>",h);

//lastIndexOf() Syntax: lasIindexOf("Search item", start) - searches from the end

var g=["sun","mon","tue","mon","thurs","fri","sat"];
var h = g.lastIndexOf("mon");//3
document.write("<br>",h);
var h = g.lastIndexOf("mon",2);//1
document.write("<br>",h);
var h = g.lastIndexOf("mons");// returns -1
document.write("<br>",h);

//includes()  syntax: includes("search item")

var s=g.includes("mon");
document.write("<br>",s); //true

//some() verifies if any element satisfying the given condition

var age=[10,20,13,18,19];

var b = age.some(checkAdult);
document.write("<br>",b); //true

function checkAdult(ages){
    return ages >=18;
}

//every() all element should satisfy the given condition
var age=[10,20,13,18,19];

var b = age.every(checkAdult);
document.write("<br>",b);//false

function checkAdult(ages){
    return ages >=18;
}

//find()  syntax: find(function name)
var age=[10,20,13,18,19];
var b = age.find(checkAdult);
document.write("<br>",b); // 20
function checkAdult(ages){
    return ages >=18;
}

//findIndex() syntax: findIndex(function Name)
var age=[10,20,13,18,19];
var b = age.findIndex(checkAdult);
document.write("<br>",b); //1
function checkAdult(ages){
    return ages >=18;
}

/*filter() : searches  all the elemenys of an array and returns new array 
syntax: filter(function name); 
*/
var age=[10,20,13,18,19];
var b = age.filter(checkAdult);
document.write("<br>",b); // 20, 18,19 
function checkAdult(ages){
    return ages >=18;
}

// toString() : to convert an array to string, post which array methods can not be applied. /Syntax: toString()
var a = ["aman","rakesh","navya","vandana"];
a.toString();
document.write("<br>",a);//aman,rakesh,navya,vandana 

//valueOf() : prints the value of an array (default functionality of an array)
var a = ["aman","rakesh","navya","vandana"];
document.write("<br>",a.valueOf());

//fill() : to fill multiple postions of an array with static value
var a = ["aman","rakesh","navya","vandana"];
a.fill("ram");
document.write("<br>",a);// ram,ram,ram,ram 

//forEach() 
var a = ["aman","rakesh","navya","vandana"];
a.forEach(function(value, index){
    document.write("<br>"+index + " " +value);
})


/*OBJECTS
syntax:
var objectname = {key1 : "value1",
key2 : "value2"
}
can access object values using . and ['']

*/

var a= {
    firstName: "Ram",
    lastName : "Kumar",
    age: 18,
    country: "India",
    favMov : ['Abc','def,','ghi'],
    salary : function(){
        return 50000;
    },
    fullName : function(){
        return this.firstName+" " +this.lastName;
    },
    living : {
        city : 'punjab'
    }
};
document.write("<br>",a);//[object Object] 
console.log(a);//Object { firstName: "Ram", lastName: "Kumar", age: 18, country: "India" }
document.write("<br>", a.firstName);//Ram 
document.write("<br>", a.favMov);//Abc,def,,ghi 
document.write("<br>", a.favMov[2]);//ghi
document.write("<br>", a.salary());//50000 
document.write("<br>", a.fullName());//Ram Kumar 
document.write("<br>", a.living.city);//punjab 

// Craeting objects using new keyword
var person = new Object();
person.fname ="ajay";
person.lname ="kumar";
person.age=20;
document.write("<br>", person.age);//20 
document.write("<br>", person['fname']);//ajay


// array of objects

var student=[
    {Name : "Ram", Age :30},
    {Name : "Ramy", Age :35},
    {Name : "Raman", Age :40}
];
for (var a=0; a<student.length;a++){
    document.write("<br>" +student[a].Name + " "+student[a].Age);
}

// const variable with array and objects
const ar1 = [10,20,30,40,50];
ar1[1]=25;
document.write("<br>",ar1);
//ar1 = [80,90]; //  invalid assignment to const 'ar1'

const ob ={
    name :"Ram",
    age: "25"
};
ob.name="Raj";
document.write("<br>",ob.name);//Raj
//ob={ name:"karan",}// invalid assignment to const 'ob'


/*for in loop used with objects
for (var i in objectname){
    statement
}*/
var obj={
    fname: "karan",
    lname: "kumar",
    age:35
};
for(var key in obj){
    document.write("<br>"+key+" "+obj[key]);
}

/*Map() : applying changes to the existing array and returning new array*/

var ar=[10,15,23,48];
var b = ar.map(test);

function test(x){
    return x*10;
}
document.write("<br>",b);//100,150,230,480 

var a1=[
    {fname:"kumar", lname: "k"},
    {fname:"Rahul", lname: "sharma"},
    {fname:"kumari", lname: "l"}
];
var c = a1.map(test);
function test(x){
    return x.fname+" "+x.lname;
}
document.write("<br>",c);

/*String methods

length,toLowerCase(),toUpperCase(),startsWith(),endsWith(),serach(),match(),indexOf(),lastIndexOf(),replace(),trim(),charAt(),
charCodeAt(),includes(),fromCharCode(),concat(),split(),repeat(),slice(),substr(), substring(),toString(),valueOf()

*/

var str= "Javascript is a programming is language";

var l = str.length;
document.write("<br>",l);///37

var b = str.toLowerCase();
document.write("<br>",b); //javascript is a programming language 

var c = str.toUpperCase();
document.write("<br>",c);//JAVASCRIPT IS A PROGRAMMING LANGUAGE 

var d = str.includes("Is");
document.write("<br>",d);//false

var e = str.startsWith("Javascri");
document.write("<br>",e);//true

var f = str.endsWith("age");
document.write("<br>",f);//true

var g = str.search("lan");
document.write("<br>",g);//28 ; serach returns the index of the starting character of the search element if not present then returns -1.

var h = str.match(/is/g); // g- global
document.write("<br>",h);//is,is

var i = str.indexOf("is");
document.write("<br>",i); // 11

var j = str.lastIndexOf("is");
document.write("<br>",j);// 28

var k = str.replace("Javascript","HTML");
document.write("<br>",k); //HTML is a programming is language 

var k = str.trim(); // trim removes the extra space 
document.write("<br>",k);

var m = str.charAt(3);//charAt() : returns the character at given position
document.write("<br>",m);//a

var n = str.charCodeAt(0);//charCodeAt() : returns the unicode of a character
document.write("<br>",n);//74

var o = String.fromCharCode(65);
document.write("<br>",o); //A

var str2 = " CSS is used for styling"
var p = str.concat(str2);//charCodeAt() : returns the unicode of a character
document.write("<br>",p);//Javascript is a programming is language CSS is used for styling 

var q = str.split(" ");
document.write("<br>",q);//Javascript,is,a,programming,is,language 

var r = str.repeat(2);
document.write("<br>",r);//Javascript is a programming is languageJavascript is a programming is language 

var s = str.slice(3,10);
document.write("<br>",s);//ascript

var t = str.substring(3,10);
document.write("<br>",t);//ascript

var t = str.toString();
document.write("<br>",t);

var t = str.valueOf();
document.write("<br>",t);

/*
Number Methods

Number(), parseInt(), ParseFlaot(), isFinite(), isInteger(), toFixed(x), toPrecision(x)
*/

var n = "98";
var z= Number(n); // to convert any data type to number data type
document.write("<br>",z +10); //108

var n = "9.56"; 
var m = "100 20";
var y= parseInt(m);//100
var z= parseInt(n); // 9 
document.write("<br>"+z+" "+y);

var n = "9.569856"; 
var m = "100.20";
var y= parseFloat(m);//100
var z= parseFloat(n); // 9 
document.write("<br>"+z+" "+y);

var n =100;
var c = Number.isFinite(n);
document.write("<br>",c);//true

var n ="100";
var c = Number.isInteger(n);
document.write("<br>",c);//false

var n =9.569856; 
var y= n.toFixed(4);//100
document.write("<br>",y);//9.5699

var n =9.569856; 
var y= n.toPrecision(2);//100
document.write("<br>",y);//9.6

/*
MATH methods

ceil(x), floor(x), round(x), trunc(x), max(x,y,...n), min(x,y,....n), sqrt(x), cbrt(x), pow(x,y), abs(x), PI, random()
*/

var ab = Math.ceil(5.236);
document.write("<br>",ab);//6

var ab = Math.floor(5.236);
document.write("<br>",ab);//5

var ab = Math.round(15.236);
document.write("<br>",ab);//15

var ab = Math.trunc(9.632);
document.write("<br>",ab);//9

var ab = Math.max(5,6,9,2,3,56,89,56,89);
document.write("<br>",ab);//89

var ab = Math.min(5,4,3,2,1,56);
document.write("<br>",ab);//1

var ab = Math.sqrt(64);
document.write("<br>",ab);//8

var ab = Math.cbrt(125);
document.write("<br>",ab);//5

var ab = Math.pow(2,8);
document.write("<br>",ab);//256

var ab = Math.abs(-5.565);
document.write("<br>",ab);//5.565

var ab = Math.floor(Math.random() * 10) +1;
document.write("<br>",ab);// random values between 1 to 10

var ab = Math.PI;
document.write("<br>",ab);//3.14


/*DATE OBJECT
var a = new Date();

toDateString(), getDate(), getFullYear(), getMonth(), getDay(), getHours(), getMinutes(), getSeconds(), getMiliseconds(),
setDate(), setFullYear(), SetHours(), setMiliseconds(), setMinutes(), setMonth(), setSeconds()
*/

var now = new Date();
document.write("<br>", now);//Thu Jun 22 2023 13:02:03 GMT+0530 (India Standard Time) 
document.write("<br>", now.toDateString());//Thu Jun 22 2023 
document.write("<br>", now.getDate());//22
document.write("<br>", now.getFullYear());//2023
document.write("<br>", now.getMonth());//5
document.write("<br>", now.getDay());//4
document.write("<br>", now.getHours());///13 
document.write("<br>", now.getMinutes());//7
document.write("<br>", now.getSeconds());//43
document.write("<br>", now.getMilliseconds())//162
now.setDate(20);
document.write("<br>",now);//Tue Jun 20 2023 13:09:55 GMT+0530 (India Standard Time) 
now.setFullYear(2024);
document.write("<br>",now);//Thu Jun 20 2024 13:10:38 GMT+0530 (India Standard Time) 
now.setMonth(4);
document.write("<br>",now);//Mon May 20 2024 13:11:10 GMT+0530 (India Standard Time) 
now.setHours(16);
document.write("<br>",now);//Mon May 20 2024 16:12:05 GMT+0530 (India Standard Time) 


/*
 DOM- Document Object Module

 DOM Tree: root, element node, text node, attribute node
*/

/*DOM targeting Methods

 ID: document.getElementById(id)

 Class name: document.getElementsByClassName(name)

 Tag Name: document.getElementsByTagName(name)

 Other Targeting Methods: 
 document, document.all, document.documentElement, document.head, document.title, document.body, document.images, document.anchors,
 document.links, document.forms, document.doctype, document.URL, document.baseURL, document.domain 


var element;
element=document.getElementsByTagName(head);
console.log(element);

document.all
HTMLAllCollection { 0: html, 1: head, 2: meta, 3: meta, 4: meta, 5: link, 6: link, 7: link, 8: link, 9: title, … }

document.images
HTMLCollection { length: 0 }

document.getElementById("body");
null 
*/

var ap = document.getElementsByTagName("head");
document.write("<br>", ap);
console.log(ap);//HTMLCollection { 0: head, length: 1 }

var cla= document.getElementsByClassName("list");
console.log(cla);

/*
DOM get methods

innerText, innerHTML,getAttribute, getAttributeNode, Attributes

*/

var c= document.getElementById('ids').innerText;
console.log(c);

var c= document.getElementById('para1').innerHTML;
console.log(c);

var c= document.getElementById('ids').getAttribute('class');//names
console.log(c);

var c= document.getElementById('ids').getAttributeNode('class');//class="names"
console.log(c);

var c= document.getElementById('ids').attributes; 
console.log(c);////NamedNodeMap [ id="ids", class="names" ]

/*
DOM set methods

innerText, innerHTML, setAttribute, Attribute, removeAttribute

*/
// var c = document.getElementById("list").innerHTML;
// console.log(c);
// document.getElementById("list").innerHTML="<li>Wow</li>";
// var c= document.getElementById('list').innerHTML; 
// console.log(c);

// document.getElementById("list").setAttribute("class","xyz");//setting attribute
// var c= document.getElementById('list').getAttribute("class");
// console.log(c);

// //document.getElementById("btn").setAttribute("style","background-color:red;");

// document.getElementById("btn").attributes[1].value="xyz"; //id value changed from btn to xyz

// document.getElementById("xyz").removeAttribute("style");
// document.getElementById("xyz").attributes[1].value="btn";

// //querySelector() queryselectorAll()

// document.querySelector('#btn').setAttribute("style","background-color:yellow;");

// var c=document.querySelectorAll(".items")[1].innerHTML;
// console.log(c)

// var c=document.querySelectorAll("ul")[1].innerHTML;
// console.log(c)

// var c=document.querySelectorAll(".list li");
// console.log(c);

// /*DOM CSS styling

// Style, className, classList 

// */
// var x= document.querySelector("#para1").style.border;
// console.log(x);//1px solid red

// document.querySelector("#para1").style.backgroundColor="tan";
// document.querySelector("#para1").style.color="blue";

// document.querySelector("#para1").className ="abc def";// adding classnames
// var d = document.querySelector("#para1").className;
// console.log(d);
// document.querySelector(".abc").style.backgroundColor="grey";

// document.querySelector("#list").classList ="ac df";
// var d = document.querySelector("#list").classList;
// console.log(d);

/*DOM addEventListener()

document.getElementById(id).onclick(event name) = functionName;

*/

document.querySelector(".btn2").onclick = abc;

function abc(){
    document.querySelector(".btn2").style.backgroundColor ="Red";
}

/*addEventListener 
documenet.gerElemetsById(id).addEventListener("event name", functionName)
*/

document.querySelector(".btn2").addEventListener('mouseenter', function(){
    this.style.backgroundColor ="green";
});

//useCapture : addEventListener(event, function, useCapture);// useCapture can be True or False

document.querySelector("#div2").addEventListener('click',function(){
    alert('Inner div')
}, true);


document.querySelector("#div1").addEventListener('click',function(){
    alert('outer div')
},false);

//removeEventListener() : element.removeEventListener("eventname", functionName);

document.querySelector(".btn2").addEventListener("click", abc);
document.querySelector(".btn2").addEventListener('mouseleave', xyz);
function abc(){
    document.querySelector(".btn2").style.backgroundColor ="grey";
}

function xyz(){
    document.querySelector(".btn2").removeEventListener('click',abc);
}


/*classList Methods

add(class1, class2...), remove(class1, class2,...), toggle(class), contains(class), item(index), length

*/


document.querySelector("#lists").classList.add("ghi","pqr","abc");
var d = document.querySelector("#lists").classList;
console.log(d);

document.querySelector("#lists").classList.remove("ghi");
var d = document.querySelector("#lists").classList;
console.log(d);

var d= document.querySelector("#lists").classList.length;
console.log(d);//3

document.querySelector("#lists").addEventListener('mouseenter',abc);
function abc(){
    document.querySelector("#lists").classList.toggle('ijk');
}

var d= document.querySelector("#lists").classList.item(2);
console.log(d);//abc

var d= document.querySelector("#lists").classList.contains('abc');
console.log(d);//true

document.querySelector('h1').classList.add('h1');
document.querySelector('.h1').style.marginTop="20%";

/*
DOM Traversal Methods

parentNode, ParentElemet, Children, childNodes, firstChild, firstElementChild, lastChild, lastElementChild, nextElementSibling,
nextSibling, previousElementSibling, previousSibling

*/

//parentNode, ParentElemet
document.getElementById("inner").parentElement.style.backgroundColor="violet";
var b=document.getElementById("inner").parentElement;
console.log(b);//<div id="outer" style="background-color: blue; …on:absolute; width:80%;">

document.getElementById("child-c").parentElement.style.backgroundColor="pink";
var b=document.getElementById("child-c").parentNode;
console.log(b);//<div id="inner" style="background-color: pink; …y: flex; height: 200px;">

var c=document.querySelector('#main').parentNode;
console.log(c);//HTMLDocument

var c=document.querySelector('#main').parentElement;
console.log(c);//null


//Children, childNodes

var d=document.getElementById("inner").children;
console.log(d);//HTMLCollection { 0: h2, 1: div, 2: div, 3: div#child-c, 4: div, length: 5, … }

document.getElementById("inner").children[1].style.backgroundColor="green"
var d=document.getElementById("inner").children[1];
console.log(d);//<div style="background-color: green; margin: 7%; padding: 3%;">

var d=document.getElementById("inner").childNodes;
console.log(d);//NodeList(11) [ #text, h2, #text, div, #text, div, #text, div#child-c, #text, div, … ]

document.getElementById("inner").childNodes[1].style.backgroundColor="yellow"
var d=document.getElementById("inner").childNodes[1];
console.log(d);//<h2 style="background-color: yellow;">


//firstChild, firstElementChild, lastChild, lastElementChild

var f=document.getElementById("inner").firstElementChild;
console.log(f);//<h2 style="background-color: yellow;">

document.getElementById("inner").firstElementChild.style.backgroundColor="orange";
var f=document.getElementById("inner").firstElementChild;
console.log(f);//<h2 style="background-color: orange;">

var f=document.getElementById("inner").lastElementChild;
console.log(f);//<div style="background-color: grey; margin:7%; padding: 3%;">

document.getElementById("inner").lastElementChild.style.backgroundColor="red";
var f=document.getElementById("inner").lastElementChild;
console.log(f);//<div style="background-color: red; margin: 7%; padding: 3%;">

var f=document.getElementById("inner").firstChild;
console.log(f);//##text "\n        "

var f=document.getElementById("inner").lastChild;
console.log(f);//#text "\n        "


//nextElementSibling, nextSibling, previousElementSibling, previousSibling

var g=document.getElementById("child-c").nextElementSibling;
console.log(g);//<div style="background-color: red; margin: 7%; padding: 3%;">FG</div>

var g=document.getElementById("child-c").previousElementSibling;
console.log(g);//<div style="background-color: grey;  margin:7%; padding: 3%;">CD</div>


document.getElementById("child-c").previousElementSibling.style.backgroundColor="yellow";
var g=document.getElementById("child-c").previousElementSibling;
console.log(g);

var g=document.getElementById("FG").nextElementSibling;
console.log(g);//null

var g=document.getElementById("child-c").previousSibling;
console.log(g);//#text "\n            "

var g=document.getElementById("child-c").nextSibling;
console.log(g);//#text "\n            "


/*DOm Create Methods

createElement, createTextNode, createComment

*/

var newElement= document.createElement("p");
console.log(newElement);//<p>

var newText= document.createTextNode("This is an example file");
console.log(newText);//#text "This is an example file"

var comment= document.createComment("test comment");
console.log(comment);//<!-- test comment -->


/* DOM Append Methods

appendChild(): adds an elemet at the end, insertBefore(): to append an element to the required postion {only append to the craeted 
elements}

insertAdjacentElement, insertAdjacentHTML, insertAdjacentText {create the element and appends to the required postion}

*/

newElement.appendChild(newText);
console.log(l);

var x =document.getElementById("test").appendChild(newElement);
console.log(x);//<p>This is an example file</p>

var target =document.getElementById("test");
target.insertBefore(comment, target.childNodes[0]);
console.log(target);


/*
insertAdjacentElement : creates an empty element and appends

insertAdjacentHTM : Craetes an element with text node and appends

insertAdjacentText: creates text node and appends

Postions:

beforebegin, afterbegin, beforeend, afterend

*/

var element1 =  document.createElement("h2");
var text = document.createTextNode("This is a text for beforebegin");
element1.appendChild(text);
var target = document.getElementById("test");
target.insertAdjacentElement("beforebegin",element1);


var element2 = "<h2> After Begin</h2";
target.insertAdjacentHTML("afterbegin",element2);


var element3 = "<h2> After End</h2";
target.insertAdjacentHTML("afterend",element3);

var element4 = " Before End";
target.insertAdjacentText("beforeend",element4);

//replaceChild(), removeChild()

var newElement = document.createElement("li");
var newText = document.createTextNode("New Text here");
newElement.appendChild(newText);

var target = document.getElementById("lists");
var oldElement = target.children[0];
console.log(oldElement);//A

target.replaceChild(newElement, oldElement);
var z = target.children[2];
target.removeChild(z);

//cloneNode()
var target = document.getElementById("lists").children[0];
var copyEle = target.cloneNode();
console.log(copyEle);//<li></li>

var target = document.getElementById("lists").children[0];
var copyEle = target.cloneNode(true);
console.log(copyEle);//<li>New text here</li>
document.getElementById("list2").appendChild(copyEle);


//DOM contains()
var parentEle = document.getElementById("outer");
var target = document.getElementById("inner");
var f = parentEle.contains(target);
console.log(f);//true


//hasAttribute(), hasChildNodes()

var ele = document.getElementById("outer");
var f = ele.hasAttribute('class');
console.log(f)//false

var d = document.getElementById("inner");
var f= d.hasChildNodes();
console.log(f);//true

/*isEqualNode()

Criteria to be true
1. Same node type
2. Same nodename
3. Same NodeValue
4. Same childNodes
5. Same attributes
6. Same attribute values
*/

var one = document.getElementById("lists").firstElementChild;
var two = document.getElementById("list2").lastChild;
var equal = one.isEqualNode(two);
console.log(equal);//true 



/*Form Events

keydown, keyup, keypress, focus(), blur(), input, change, select, submit, invalid

*/

function focusFunction(ele){
    ele.style.backgroundColor="lime";
}

function blurFun(e){
    e.style.backgroundColor=""
};

function inputFun(e){
    var d= e.value;
    document.getElementById("t1").innerHTML=d;
}

function changeFun(f){
    var d= f.value;
    document.getElementById("t1").innerHTML=d;
}

function selectFun(){
    console.log("Selected");
}

function submitFun(){
    var x =document.getElementById("fname").value
   alert(x+" Form Submitted");
}

/*setInterval(), clearInterval() : to animate

Syntax: setInterval(functionName, millisecond)

*/
var a=0;
for(i=0;i<2;i++){
var id = setInterval(anime, 100);
}
function anime(){
    a+=10;
    if(a==1300){
        var target= document.getElementById("t2");
        clearInterval(id);
        target.style.marginLeft=0;
        a=0;
    }else{
    var target= document.getElementById("t2");
    target.style.marginLeft=a+'px';
    } 
}


/*setTimeout() : setTimeout(functionName,millisecond) // it will run only once unlike setInterval
clearTimeout()
*/
var b = setTimeout(function(){
    var target = document.getElementById("t3");
    target.style.width="600px";
}, 5000);


function stopAnime(){
    clearTimeout(b);
}


//BOM : Browser Object Model

/*Window Height & Width

innerHeight, innerWidth, outerHeight, outerWidth
*/

function resizeFunction(){
//console.clear();
var iHeight = window.innerHeight;
console.log("inner Height : "+iHeight);//581

var oHeight = window.outerHeight;
console.log("outer height: "+oHeight);//824

var iwidth = window.innerWidth;
console.log("inner width :"+iwidth);

var owidth = window.outerWidth;
console.log("outer width: "+owidth);
}

/*window open() and close()

window.open(URl, name, specs)

name: anyname or _blank, _parent, _self, _top

spec: width, height, left, top

*/
var myWindow;

function openWindow(){
    myWindow=window.open("","_blank","width=500px, height=200px;");
    myWindow.document.write("<p>This is  a new window</p>")
}

function closeWindow()
{
    myWindow.close();
}

//moveBy(top, left):considers realtive positions, moveTo(top, left): considers absolute positions

function moveWindow()
{
    myWindow.moveTo(100,100);
    myWindow.focus();
}

function moveWindow2()
{
    myWindow.moveBy(100,100);
    myWindow.focus();
}

/*
resizeBy(width, height): resizes window by adding new width and height to the existing values of width and height
 resizeTo(width, height) : resizes the window width and height
*/
function resizeWindow()
{
    myWindow.resizeTo(500,200);
    myWindow.focus();
}

function resizeWindow2()
{
    myWindow.resizeBy(500,200);
    myWindow.focus();
}

/*

scrollTo(X,Y), scrollBy(X,Y)

Horizontal Scroll bar - Y-Axis
Vertical Scroll bar - X-Axis
left and top : X-Axis and Y-Axis takes negative values

*/

function scrollWindow(){
    window.scrollBy(0,20)
}

function scrollWindow2(){
    window.scrollTo(0,15000)
}


/* Object Oriented Programming
Encapsulation : combining more than one entity to create one entity
Abstraction : hiding of internal details
Inheritence : creating an object that inhetits properties and methods of parent object and has it's own properties
Polymorphism : something occurs in several different forms.
*/

/* Prototype __proto__ */

var obj3={
    name:"abc",
    language:"js"
}
console.log(obj3);

var p = {
    run:()=>{
        console.log("run");
    }
}
p.__proto__={
    country:"Ind"
}

obj3.__proto__=p; //setting prototype of an object
obj3.run();
console.log(obj3.country);//Ind


/* Class and Objects, constructors

constructor is called when we carete a new object

*/

class BusForm{
    submit(){
        console.log(this.name +" Form Submitted with ticket number "+ this.ticket);
    }
    cancel(){
        console.log(this.name+" this form cancelled with ticket number " +this.ticket);
    }
    fill(givenName, ticketnum){
        this.name=givenName;
        this.ticket = ticketnum;
    }
    
}

let p1 = new BusForm(); //create a form
p1.fill("karan",1253); // fill the form with details
p1.submit();
p1.cancel();
let p2 = new BusForm();
p2.fill("Rohan",25635)
p2.submit();

/* Constructor */
class RailForm{
    constructor( givenName, ticketnum, address){
        this.name=givenName;
        this.ticket = ticketnum;
        this.address=address;
        console.log("Constructor called "+givenName+" " +ticketnum);
    }
    preview(){
        console.log(this.name +" your form with ticket number "+ this.ticket+" and address "+this.address);
    }
    submit(){
        console.log(this.name +" Form Submitted with ticket number "+ this.ticket);
    }
    cancel(){
        console.log(this.name+" this form cancelled with ticket number " +this.ticket);
        this.ticket = 0;
    }
}
let p3 = new RailForm("Aman",1673,"Bihar"); // craete and fill the form
p3.preview();
p3.submit();
p3.cancel();
p3.preview();

//Inheritance

class Animal{
    constructor(name, color){
        this.name=name;
        this.color-color;
    }
    run(){
        console.log(this.name+ " is running");
    }
    shout(){
        console.log(this.name+ " is shouting");
    }
}

class Monkey extends Animal{
    
    eat(){
        console.log(this.name+ " is eating");
    }
}


let ani= new Monkey("abc", "black");
ani.run();

//method overriding

class Employee{
    constructor(){

    }
    login(){
        console.log(`Logged in`);
    }
    logout(){
        console.log(`Logged out`);
    }
    requesttimeoff(leave){
        console.log(`Employee has requested ${leave} leaves`);
    }
}

class Programmer extends Employee{
    requestwater(x){
        console.log(`Employee has requested ${x}L water`);
    }
    requesttimeoff(leave){
        super.requesttimeoff(3);
        console.log("one extra granted");
    }
}

let emp= new Programmer();
emp.login();
emp.requesttimeoff(2);

//constructor overriding

class Employee1{
    constructor(name){
        this.name=name;
        console.log(`${this.name} employee constructor called`);
        
    }
    login(){
        console.log(`Logged in`);
    }
    logout(){
        console.log(`Logged out`);
    }
    requesttimeoff(leave){
        console.log(`Employee has requested ${leave} leaves`);
    }
}

class Programmer1 extends Employee1{
    constructor(name){ //overriding
        super(); 
        console.log(`${this.name} Programmer constructor called`);
        
    }
    requestwater(x){
        console.log(`Employee has requested ${x}L water`);
    }
    requesttimeoff(leave){
        super.requesttimeoff(3);
        console.log("one extra granted");
    }
}

let emp1= new Programmer1("harry");
emp1.login();
emp1.requesttimeoff(2);

//Static methods

class Bird{
    constructor(name){
        this.name=name;
    }
    fly(){
        console.log(Bird.capitalize(this.name)+ " is flying")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+ name.substring(1, name.length);
    }
}

let bird= new Bird("jack");
bird.fly();

//getter setter & instanceOf

class Animal1{
    constructor(name){
        this._name=name;
    }
    walk(){
        console.log(`${this.name} is walking`)
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name=newName;
    }
}

let ani2 = new Animal1("tiger");
ani2.walk();
ani2.name="bruno";
ani2.walk();
console.log( ani2 instanceof Animal1); // true

/* Higher Order Array Methods */
//map(index, array, value)
 let ar2= [45,50,30];
 ar2.map((value, arr, index)=>{
    console.log(value, index, arr);
 })

 //filter
 let ar3= [45,50,30,68,25,9];
 let a3=ar3.filter((a)=>{
     return a<10;
 })
 console.log(a3);

 //reduce
 let ar4= [1,2,3,6,2,1,3];

 let a4=ar4.reduce((b1, b2)=>{
    return b1+b2;
 })
 console.log(a4);


/*error handling

try{

}catch(error){
    
}

*/
setTimeout(()=>{
    console.log("Please wait....");
});

try{
    console.log(Hello);
}
catch(error){
    console.log("error");
}
setTimeout(()=>{
    console.log("Fetching Name....")
},2000);


/*Error object
try{
    
}catch(e){
    alert(e.name);
    alert(e.message);

*/

try{
     throw new Error("Variable is not defined"); 
}catch(e){
    console.log(e.name);
    console.log(e.message);
}

//finally clause

try{
    let val =0;
    console.log("no error");
    console.loglog(pro);
}catch(e){
    console.log("Error");
}finally{
    console.log("executed")
}
//const 

const p = 3;
console.log(p);
p = 4;
console.log(p);

//let - Function Scope,

let x = 2;
console.log(x);
x=10;
console.log(x);
if(true){
    let x =5;
    console.log(x);
}

//var - Global scope Scope

var a9 ;
a9 = 10;
console.log(a9);

var b9 = 15;
console.log(b9);
b9 = 23;
console.log(b);
for(let i=5;i>=0;i--){
    console.log(b9);
    b9=b9-2;
}
b9=100;
console.log(b9);


// Operations

// Arithmetic Operator

let a5 = 2;
let b5 = 3;
console.log(a5+b5);
let s = "Harish";
let r = "Babu";
console.log(s+r);
let c = "4";
let d = "5";
console.log(c+d);

//addition
let a = 2;
let b = 4;
console.log(`Addtion ${a+b}`);

//subraction

console.log(`subraction ${a-b}`);

//multiplication

console.log(`multiply ${a*b}`);

//division

console.log(`divide ${a/b}`);

//exponentiation - Power of 

console.log(`Power ${a**b}`);

//Modulus
//Gives the remainder, returns divident if the divisor is greater
//eg. 2 % 4 = 2 , 2 is divident and 4 is the divisor
console.log(`Modulus ${b%a}`);

//Increment , Decrement
console.log(`a:${a}`);
a++; //incremented from 2 to 3
console.log(a); // 3
console.log(a++);//displays 3 and increments to 4 , //Post Increment
console.log(++a);//increments from 4 to 5 and displays the value as 5 //Pre Increment

console.log(`b:${b}`);//4
b--;// decrements 4 to 3
console.log(b);// 3
console.log(b--);//displays 3 and decrements to 2
console.log(--b);//decrements to 1 and displays

let e = 1+(2-1)*4**3/2*2;
console.log(e);

//comparison

let a = 2; 
let b = 3;
if(a==b){ //equal to 
    console.log(true)
}else{
    console.log(false);
}

let f = "2"
if(a===f){ //equal value and type
    console.log(true)
}else{
    console.log(false);
}

if(a!=b){ //not equal
    console.log(true)
}
else{
    console.log(false)
}

if(a!==f){ //not equal value and type
    console.log(true)
}else{
    console.log(false);
}

if(a>b){ //greater
    console.log(true)
}else{
    console.log(false);
}
if(a<b){ //lesser
    console.log(true)
}else{
    console.log(false);
}

if(a>=b){ //greater or equal to
    console.log(true)
}else{
    console.log(false);
}
if(a<=b){ //lesser or equal to 
    console.log(true)
}else{
    console.log(false);
}

let g = a>b ? "a is greater" : "b is greater";
console.log(g);

//String operations
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

let text3 = "20";
let text4 = "5";
let result1 = text3 < text4; //2 is less than 5 lexicographically in unicode
console.log(result1);

//arrow Function

const hello = () => console.log("hello");

hello();

//with a parameter

const display = (name) => console.log(`hello ${name}`);
display("harish");

//adding two numbers

const addnum = (name,a,b) => console.log(`hello ${name}.Sum of two numbers is ${a+b}`);
addnum("harsh",2,3);

//Array

let fruits = ['apple','orange','banana'];
console.log(fruits);

fruits[1] = "kiwi";
console.log(fruits);

const cars = ['audi','benz','bmw'];
console.log(cars);

cars[1] = "bentely";
console.log(cars);

//add elements
cars.push("skoda");//adds from last 
console.log(cars);

//remove elements 
cars.pop() //removes from last
cars.pop()
console.log(cars);

//shift
fruits.unshift("mango");//adds element from the beginning
console.log(fruits); 

fruits.shift();//removes elemnt from first
console.log(fruits);

//length
console.log(fruits.length);

//array at - use at to return element at the specified index
console.log(fruits.at(1));

//join - converts the array elemnts into a single string
console.log(fruits.join(" "));

//delete - leaves empty space after deleting the item
delete fruits[1];
console.log(fruits);
fruits[1] = "melon";
console.log(fruits);

//sort
console.log(fruits.sort());

// Callback functions

hello(leave);

function hello(callback){
    console.log("hello");
    callback();
}
function leave(){
    console.log("leave")
}
function goodbye(){
    console.log("goodbye");
}

//sum with callback
let x1 = 2;
let x2 = 3;
sum(square,x1,x2);
function sum(callback, x, y){
    let res = x+y;
    callback(res);
}

function square(res){
    let sq = res**2;
    console.log(res,sq);
}

//foreach

let veges = ['tomoto','potato','pickle'];
veges.forEach(veg => {
    console.log(veg)
});

let number = [1,2,3,4,5,6];
number.forEach(num =>{
    console.log(num)
});

//filter
let number1 = [1,2,3,4,,5,6,7,8]
number1.filter(num => num%2===0).forEach(num =>{
    console.log(num)
});
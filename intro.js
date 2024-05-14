//after working on the first part we need to execute the rest of the task.
//let list the different number
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//1- check if all the numbers are divisible by 5;
let numDivby5 =(n1&&n2&n3&&n4 / 5);
console.log(numDivby5)
//check if  the first numb is larger than the last one.
let number1 = 5;
let number4 = 5;

if(number1 > number4){
    console.log(`${number1} is larger than ${number4}`)
}else{
    console.log(`less than`)
};

//3- accomplish the different arithmetic chain.
  //substraction
  let num1 = 10;
  let num2 = 15;
  let substract = num1 - num2;
  console.log(substract)
  //multiplication
  let mutliply = substract * n3;
  console.log(mutliply)
  //find the remainder
  let remainder = mutliply / n4;
  console.log(remainder)

//change the way tu calculate the value of is over

//part2 practical math

     /* The distance of the trip, in total, is 1,500 miles.
     Your car’s fuel efficiency is as follows:
     -At 55 miles per hour, you get 30 miles per gallon.
     -At 60 miles per hour, you get 28 miles per gallon.
     -At 75 miles per hour, you get 23 miles per gallon.
    // You have a fuel budget of $175.
    // The average cost of fuel is $3 per gallon. */

//set up a program to answer the following questions.
// how many gallons of fuel will you need for the entire trip?
let distance = 1500;
let miles = 28;
let gallons = distance / miles;
console.log(gallons)

//check if the fuel budjet will be enough for the trip.
  //we have a budjet of $175
  //the cost of fuel is $3/gallon
  //to check it we will have to multiply the gallons we need for the trip time the cost of the gallon.
let cost = 3;
let budjetCheck = gallons * cost;
console.log(`if we drive at 55 or 60 miles per hours, we would have to pay ${budjetCheck} for the fuel which is less than the given budjet. however driving at 75 the budjet wont be enough `)

//how long will the trip take in hours?
//to do so we will have to divide the total distance of the trip by the speed he will driving at.

let speed = 60;
let tripDuration = distance / speed;
console.log(`if he drives at 60miles/hrs, he will spend ${tripDuration} hours for the trip.\n`)

console.log(`atfer all the differents operation, we think driving at ${speed} miles per hour will be the good choice for the trip will last ${tripDuration} hours and  he will spend only ${budjetCheck} which fit for the given budjet and only ${gallons} gallons of fuel.`)
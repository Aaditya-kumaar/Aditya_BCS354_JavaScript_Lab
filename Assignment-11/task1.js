/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 11: Scope and Closures - Task 1
  Student Name: Aditya Kumar
  Roll Number: 2510303037
*/

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);

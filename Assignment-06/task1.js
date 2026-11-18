/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 6: JSON Text - Task 1
  Student Name: Aditya Kumar
  Roll Number: 2510303037
*/

const student = {
    name: "Rohan",
    marks: [70, 80]
};

const jsonText = JSON.stringify(student);
console.log(jsonText);

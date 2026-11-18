/*
  INVERTIS UNIVERSITY, BAREILLY
  B.Tech CSE - Second Year | JavaScript Programming Lab (BCS354)
  Assignment 12: Callbacks and Higher-Order Functions - Task 2
  Student Name: Aditya Kumar
  Roll Number: 2510303037
*/

function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(formatMarks(76, (marks) => `Marks: ${marks}/100`));

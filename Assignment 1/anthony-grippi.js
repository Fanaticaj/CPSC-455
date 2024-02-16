// Anthony Grippi
// Assignment 1
// 2/15/2024
// CPSC 455 Professor Hamid Ebrahimi

// 1.Create a class Student with the following properties:
class Student {
    constructor(firstName, lastName, studentNumber) {

        // 2.firstName: Represents the first name of the student.
        this.firstName = firstName;

        // 3.lastName: Represents the last name of the student.
        this.lastName = lastName;

        // 4.studentNumber: Represents the student number.
        this.studentNumber = studentNumber;
    }
}

// 5.Add a method printFullName to the prototype of the Student class that prints the full name of the student.
Student.prototype.printFullName = function() {return console.log(this.firstName + ' ' + this.lastName);}

// 6.Add another method getStudentNumberLastTwoDigits to the prototype that returns the last two digits of the student number.
Student.prototype.getStudentNumberLastTwoDigits = function() {return this.studentNumber.toString().slice(-2);}

// 7.Create an instance of the Student class with your own first name, last name, and the last two digits of your student number.
let s1 = new Student('Anthony', 'Grippi', 93);

// 8.Call the printFullName method on the instance to print the full name.
s1.printFullName();

// 9.Call the getStudentNumberLastTwoDigits method on the instance and store the result in a variable called lastTwoDigits.
let lastTwoDigits = s1.getStudentNumberLastTwoDigits();

// 10.Use the ternary operator to determine if the length of your full name is greater or equal to the lastTwoDigits. Save the result in a variable called comparisonResult.
let comparisonResult = ((s1.firstName + s1.lastName).length >= lastTwoDigits) ? true : false;

// 11.Print the results, including the full name, the last two digits, and the comparison result.
console.log(`${s1.firstName} ${s1.lastName}, ${s1.studentNumber}: ${comparisonResult}`);
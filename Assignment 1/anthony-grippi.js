class Student {
    constructor(firstName, lastName, studentNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentNumber = studentNumber;
    }

    printFullName() {return console.log(this.firstName + this.lastName);}

    getStudentNumberLastTwoDigits() {
        return this.studentNumber
    }
}

let s1 = new Student('Anthony', 'Grippi', 11);
s1.printFullName();
con
let lastTwoDigits = s1.getStudentNumberLastTwoDigits();

let comparisonResult = (len(s1.firstName + s1.lastName) >= lastTwoDigits) ? true : false;
console.log(len(s1.firstName + s1.lastName));
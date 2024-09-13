/* Exercise: Student Grades Management
Create a Student Object:
Define a Student object with properties: name, id, and grades (an array of numbers).
Add Grades:
Write a function named addGrade that takes a Student object and a grade (number) as
parameters, and adds the grade to the student's grades array.
Update Student Name:
Write a function named updateStudentName that takes a Student object and a new name as
parameters and updates the student's name.
Test the Functions:
Create a student object.
Add a few grades to the student.
Update the student's name and print the updated object. */

class Student {
    constructor(name, id, grades = []) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }
}

function addGrade(student, grade) {
    student.grades.push(grade);
}

function updateName(student, newName) {
    student.name = newName;
}

// Tests
const student = new Student('Charlie', 12345, [10, 12, 7]);
console.log(student);

addGrade(student, 10);
console.log(student.grades);

updateName(student, 'Simona');
console.log(student.name);
console.log(student);

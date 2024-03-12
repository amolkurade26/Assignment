var Student = /** @class */ (function () {
    function Student(rollNo, studentName, division, standerd) {
        this.rollNo = rollNo;
        this.studentName = studentName;
        this.division = division;
        this.standerd = standerd;
    }
    Student.prototype.display = function () {
        console.log("\n        Student Details are :\n        Roll Number : ".concat(this.rollNo, ",\n        Student Name : ").concat(this.studentName, ",\n        Division :").concat(this.division, ",\n        Standerd : ").concat(this.standerd, ",\n        "));
    };
    return Student;
}());
var std1 = new Student(1, "Amol", "A", "10th");
var std2 = new Student(2, "Amit", "A", "11th");
std1.display();
std2.display();

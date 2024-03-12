var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(employeeName, deptId) {
        NeoEmployee.countEmployeeId++;
        this.employeeId = NeoEmployee.countEmployeeId;
        this.employeeName = employeeName;
        this.deptId = deptId;
    }
    NeoEmployee.prototype.display = function () {
        console.log("\n        NeoEmployee Details are :\n        Employee Id : ".concat(this.employeeId, ",\n        Employee Name : ").concat(this.employeeName, ",\n        Department : ").concat(this.deptId, ",\n        "));
    };
    NeoEmployee.countEmployeeId = 0;
    return NeoEmployee;
}());
console.log("------------- NeoEmployee Details are -------------");
var employee1 = new NeoEmployee('Amol', 20);
employee1.display();
var employee2 = new NeoEmployee('Anil', 21);
employee2.display();
var employee3 = new NeoEmployee('Kurade', 22);
employee3.display();
var employee4 = new NeoEmployee('New Added', 23);
employee4.display();

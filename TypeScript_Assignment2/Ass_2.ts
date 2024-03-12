class NeoEmployee{
    static countEmployeeId:number=0;
    employeeId: number
    employeeName:string;
    deptId:number
    
    count:number

    constructor(employeeName:string,deptId:number){
        NeoEmployee.countEmployeeId++;
        this.employeeId = NeoEmployee.countEmployeeId
        this.employeeName = employeeName;
        this.deptId = deptId;
    }

    display():void{
        console.log(`
        NeoEmployee Details are :
        Employee Id : ${this.employeeId},
        Employee Name : ${this.employeeName},
        Department : ${this.deptId},
        `);   
    }
}

console.log("------------- NeoEmployee Details are -------------");
let employee1 = new  NeoEmployee('Amol',20)
employee1.display();
let employee2 = new  NeoEmployee('Anil',21)
employee2.display();
let employee3 = new  NeoEmployee('Kurade',22)
employee3.display();



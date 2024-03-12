class Student{
    rollNo:number
    studentName:string
    division:string
    standerd:string

    constructor(rollNo:number, studentName:string,division:string,standerd:string){
        this.rollNo=rollNo;
        this.studentName = studentName;
        this.division = division;
        this.standerd = standerd; 
    }

    display():void{
        console.log(`
        Student Details are :
        Roll Number : ${this.rollNo},
        Student Name : ${this.studentName},
        Division :${this.division},
        Standerd : ${this.standerd},
        `);   
    }
}

const std1 = new Student(1,"Amol","A","10th");
const std2 = new Student(2,"Amit","A","11th");

std1.display();
std2.display();


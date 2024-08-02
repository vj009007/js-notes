// Gatter And Setter in class
class Square {
    constructor (_width){
        this.width = _width;
        this.height = _width;
    }
     get area(){
        return this.width * this.height;
     }
     set area (area) {
        this.width = Math.sqrt(area);
        this.height= this.width
     }

}

/// Static in Class

let sqr1 = new Square (4);
sqr1.area = 25;
console.log(sqr1.width);

class Employee {
    static MonthySalary(salary){
        console.log(salary/12);
    }
}
Employee.MonthySalary(180000)

// Inheritance and Extends

class fullTimeEmp {
    constructor(name, dept, salary) {
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }
    
    detail() {
        return `My Name is ${this.name}, I am working as ${this.department} and my CTC is ${this.salary}`;
    }
    
    MonthlySalary() {
        return this.salary / 12;
    }
    
    dewaliBonus(bonus) {
        return this.MonthlySalary() + bonus;
    }
}

let emp1 = new fullTimeEmp("rizwan", "React Js", 480000);

console.log(emp1.MonthlySalary());
console.log(emp1.detail());
console.log(emp1.dewaliBonus(6000));

class partTimeEmp extends fullTimeEmp {
    constructor(name, dept, salary, contractEnd) {
        super(name, dept, salary);
        this.contractEnd = contractEnd;
    }
    
    dewaliBonus(bonus) {
        return super.MonthlySalary() + bonus; // Use super to call the parent class method
    }
    
    detail() {
        console.log(`${super.detail()}, last working day ${this.contractEnd}`);
    }
}

let partEmp1 = new partTimeEmp("Ahmad", "Angular Js", 390000, "10 August 2024");

console.log(partEmp1.dewaliBonus(3000));
partEmp1.detail();

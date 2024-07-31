class myData {
    constructor(id, salary, ename){
        this.id = id;
        this.salary= salary;
        this.ename= ename;
    }
}

obj1 = new myData(1, 15000 , "rohit")
obj2 = new myData(1, 300000 , "srk")

let fullde = function(cityName){
    console.log(`My name is ${this.ename}, my id ${this.id} and my monthly salary ${this.salary/12} ${cityName}`)
}
fullde.call(obj1 , "dehli")
fullde.call(obj2, "mohali")

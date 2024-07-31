// Funtion Call method

const employe= {
    name : "rizwan",
    id: 12,
    location: "Moradabad",
   "Job Title": "React Js Developer",
    salary: 780000,
}
function monSal(bonus , hra){
    return this.salary/12 + bonus + hra;
}

// console.log(monSal.call(employe , 5000 , 100));

const emp = [
    {name: "Rizwan" , id: 2, Dept: "Sr. React Js", salary: 808080},
    {name: "Shahrukh" , id: 12, Dept: "Jr React Js", salary: 220000},
    {name: "Shahnawaz" , id: 12, Dept: "React Js", salary: 180000},
    {name: "Amit" , id: 12, Dept: "Jr Angular Js", salary: 200000},
    {name: "Syed" , id: 12, Dept: "Jr Html Js", salary: 400000},
]

function getDetail(){
    detail = `My Name is ${this.name}, I'm working as ${this.Dept} and my current monthly salary ${Math.round(this.salary/12)}`;
   return detail; 
}

emp.forEach((obj)=>{
    getDetail.call(obj);
    console.log(detail)
})




class UserData {
    constructor(ename, emailVal, salaryVal, id) {
        this.ename = ename;
        this.emailVal = emailVal;
        this.salaryVal = salaryVal;
        this.id = id;
    }
}

let allData = [];

let table = document.querySelector(".table");

let tableItem = "";


let msg =document.querySelector(".msg");
let msg2 =document.querySelector(".msg2");
msg.style= "color: green";
msg2.style= "color: red";


document.querySelector(".mybtn").onclick = function() {

    let ename = document.querySelector("input.nameVal").value;
    let emailVal = document.querySelector("input.emailVal").value;
    let salaryVal = document.querySelector("input.salVal").value;
    let id = Math.floor(Math.random() * 15 + 1); 

    let obj1 = new UserData(ename, emailVal, salaryVal, id);
    allData.push(obj1);
    
    msg.innerHTML= `Your Details Save Success Fully. Your Id = ${id}`;

    document.querySelector("input.nameVal").value = "";
    document.querySelector("input.emailVal").value = "";
    document.querySelector("input.salVal").value = "";
    console.log(allData);
};


document.querySelector(".mybtn2").onclick= function(){
    let mydata = document.querySelector(".mydata").value;
    let myDetail = allData.filter((key)=>{
       return key.id === Number(mydata) || key.ename === mydata || key.emailVal === mydata || key.salaryVal === mydata;
    })

    myDetail.forEach(element => {
        tableItem += `<tr><th>${element.id}</th><td>${element.ename}</td><td>${element.emailVal}</td><td>${element.salaryVal}</td></tr>`;
    });

    table.innerHTML= tableItem;
}


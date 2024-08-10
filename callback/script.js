// Call Back Function 

// style 1
function greet(name,callback){
    console.log("hello Dear");
    callback(name)
}
function sayHii(name){
    console.log(`My name is ${name}`)
}

// setTimeout(greet, 2000, "Rizwan", sayHii)


// Style 2
let data = [
    {name: "Rizwan", id: 120, salary:870900},
    {name: "Aahu", id: 140, salary:480000},
    {name: "Raza", id: 160, salary:657000},
]

function createData (name,id, salary, callback){
    setTimeout(()=>{
        obj= {name:name,id:id,salary:salary}
        data.push(obj);
        callback()
    },3000)
}
function getData(){
   setTimeout(()=>{
        data.forEach((value)=>{
            // console.log(value)
        }, 2000)
   })
}
createData("shaikh", 124 , 180000, getData)

//
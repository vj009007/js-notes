function greet (){
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if(currentHour < 12){
        document.querySelector(".greeting").innerHTML= "Good Morning"
    }
    else if(currentHour < 16 && currentHour > 20){
        document.querySelector(".greeting").innerHTML= "Good Afternoon"
    }
    else if(currentHour < 20 && currentHour > 0){
        document.querySelector(".greeting").innerHTML= "Good Evening"
    }
    else{
         document.querySelector(".greeting").innerHTML= "Good NIghr"
    }
}
window.onload= greet();

//Sqaure root Funtion

document.querySelector(".mybtn").onclick = function () {
  let value = document.querySelector(".artNum").value;
  let x = Number(value);
  let a = x * x;
  document.querySelector(
    "#myDiv"
  ).innerHTML = `value = ${x} <br /> squareroot = ${a}`;
};
document.querySelector(".mybtn2").onclick = function () {
  let value = parseInt(document.querySelector(".artNum2").value);
  let tableHtml = "";

  for (let index = 1; index <= 10; index++) {
    let tableNumber = index * value;
    tableHtml += `${value} × ${index} = ${tableNumber}<br />`;
  }

  document.querySelector("#myDiv2").innerHTML = tableHtml;
};
//
document.querySelector(".mybtn3").onclick = function () {
  let sub1 = Number(document.querySelector(".sub1").value);
  let sub2 = Number(document.querySelector(".sub2").value);
  let sub3 = Number(document.querySelector(".sub3").value);
  let sub4 = Number(document.querySelector(".sub4").value);
  let sub5 = Number(document.querySelector(".sub5").value);

  console.table([sub1, sub2, sub3, sub4, sub5]);

  let Total = sub1 + sub2 + sub3 + sub4 + sub5;
  let per = Total / 5;
  // Check Grade
  var gradeValue;
  function checkGrade() {
    if (Total >= 300) {
      gradeValue = "First Division";
    } else if (Total < 300 && Total >= 250) {
      gradeValue = "Second Division";
    } else if (Total < 250 && Total >= 165) {
      gradeValue = "Third Division";
    } else {
      gradeValue = "No Division";
    }
  }
  checkGrade();
  // Check Student Pass or fails
  let status;
  function studentStatus() {
    if (Total >= 165) {
      status = "Pass";
    } else {
      status = "Fail";
    }
  }
  studentStatus();

  //Print Student Data

  let table = `<table border="1px" width="500px" class="table table-bordered" border-collapsed>
        <tbody>
        <tr><th>Total Marks</th><td>500</td></tr>
        <tr><th>Student Marks</th><td>${Total}</td></tr>
        <tr><th>Percentage</th><td>${per} %</td></tr>
        <tr><th>Percentage</th><td>${gradeValue}</td></tr>
        <tr><th>Result</th><td>${status}</td></tr>
        </tbody>
    </table>`;
  document.querySelector(".myData").innerHTML = table;
};

// new Style
document.querySelector(".newbtn").onclick = function () {
  let sub1 = Number(document.querySelector(".sub1").value);
  let sub2 = Number(document.querySelector(".sub2").value);
  let sub3 = Number(document.querySelector(".sub3").value);
  let sub4 = Number(document.querySelector(".sub4").value);
  let sub5 = Number(document.querySelector(".sub5").value);

  let allSub = [sub1, sub2, sub3, sub4, sub5];

  // Student Total Marks
  let Total = 0;
  for (const item of allSub) {
    Total += item;
  }

  // Student Percentage
  let per = Total / 5;

  // Student Grade
  let gradeValue;
  function checkGrade() {
    if (Total >= 300) {
      gradeValue = "First Division";
    } else if (Total >= 250) {
      gradeValue = "Second Division";
    } else if (Total >= 165) {
      gradeValue = "Third Division";
    } else {
      gradeValue = "No Division";
    }
  }
  checkGrade();

  // Student Status (Pass or Fail)
  let status;
  function studentStatus() {
    if (Total >= 165) {
      status = "Pass";
    } else {
      status = "Fail";
    }
  }
  studentStatus();

  // Best and Lowest Marks
  let bestMark = Math.max(...allSub);
  let lowMark = Math.min(...allSub);

  // Constructing HTML table
  let table = `
        <table border="1" width="500px" class="table table-bordered">
            <tbody>
                <tr><th>Total Marks</th><td>500</td></tr>
                <tr><th>Student Marks</th><td>${Total}</td></tr>
                <tr><th>Percentage</th><td>${per} %</td></tr>
                <tr><th>Grade</th><td>${gradeValue}</td></tr>
                <tr><th>Result</th><td>${status}</td></tr>
                <tr><th>Best Marks</th><td>${bestMark}</td></tr>
                <tr><th>Low Marks</th><td>${lowMark}</td></tr>
            </tbody>
        </table>`;

  document.querySelector(".myData2").innerHTML = table;
};
//Leap year

document.querySelector(".mybtn4").onclick = function(){
    let value = Number(document.querySelector(".artNum4").value);
    if(value%4==0){
        document.querySelector("#myDiv4").innerHTML= `${value} This is a Leap year`
    }
    else{
        document.querySelector("#myDiv4").innerHTML= `${value} This is not a Leap year`
    }
}

//Shopping Discount 
document.querySelector(".mybtn5").onclick = function(){
    let value1 = Number(document.querySelector(".artNum5").value);
    let value2 = Number(document.querySelector(".artNum6").value);

    let discountPrice = value1 - (value1*value2)/100

    document.querySelector("#myDiv5").innerHTML= `
        <p><strong>MRP Rate</strong>= ${value1}</p>
        <p><strong>Discount</strong> = ${value2}</p>
        New Price <strong>= ${discountPrice}</strong>
    `;
}
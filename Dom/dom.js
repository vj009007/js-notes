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
         document.querySelector(".greeting").innerHTML= "Good Night"
    }
}
window.onload= greet();

let allListGroups = document.querySelectorAll(".list-group");

allListGroups.forEach(group => {
  let listItems = group.querySelectorAll("li");
  for (let i = 1; i < 2 && i < listItems.length; i++) {
    listItems[i].style.color = "red";
  }
});



// let allListGroups = document.querySelectorAll(".list-group");

// allListGroups.forEach(group => {
//   group.querySelectorAll("li:nth-child(-n+2)").forEach(item => {
//     item.style.color = "red";
//   });
// });

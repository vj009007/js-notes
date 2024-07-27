function greet(){
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let myGreet = document.querySelector(".greeting")
    
    if (currentHours < 12 && currentHours > 4) {
        myGreet.textContent= "Good Morning";
    }
    else if(currentHours >= 12 && currentHours < 16){
        myGreet.textContent= "Good Afternoon";
    }
    else if(currentHours >= 16 && currentHours < 20){
        myGreet.textContent= "Good Evening";
    }
     else {
        myGreet.textContent= "Good Night";
    }
}
greet()


// String Concate 
let FirstName = "Rizwan";
let lastName = "Shaikh";

let fullName = "".concat(FirstName , lastName);
console.log(fullName)
console.log(`My name is ${FirstName} ${lastName}`);

// String charAt

let charIndex = fullName.charAt(6)
console.log(charIndex)

// String Include

let myName = "       Mohd Rizwan Ahmad          "
console.log(myName.includes("R"));

// String index Of

console.log(myName.indexOf("n"));

// String LastIndex Of

console.log(myName.lastIndexOf("d"));

// String Repeat

console.log(`I name is ${FirstName.repeat(3)}`)

// Replace

console.log(myName.replace(" ", "-"));
//trim
console.log(myName.trim())


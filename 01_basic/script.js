// js Defination

let def = "JavaScript is a scripting or programming language that allows you to implement complex features on web pages";
document.querySelector('.def1').innerHTML= def;
document.querySelector('.def2').innerHTML="JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.";

//Output methods

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().
var a = 10;
function f() {
    var a = 20;
    console.log(a)
}
f();
console.log(a);


document.getElementById('myButton').onclick = function() {
    let inputValue = document.querySelector('.artNum').value;
    let x = Number(inputValue);

    // addition operator
    console.log("Addition: x + 3 = ", x + 3);

    // subtraction operator
    console.log("Subtraction: x - 3 =", x - 3);

    // multiplication operator
    console.log("Multiplication: x * 3 =", x * 3);

    // division operator
    console.log("Division: x / 3 =", x / 3);

    // remainder operator
    console.log("Remainder: x % 3 =", x % 3);

    // increment operator
    console.log("Increment: ++x =", ++x);

    // decrement operator
    console.log("Decrement: --x =", --x);

    // exponentiation operator
    console.log("Exponentiation: x ** 3 =", x ** 3);
};

document.getElementById('myButton').onclick = function() {
    let inputValue = document.querySelector('.artNum').value;
    let x = Number(inputValue);

    let results = [
        { operation: `Addition: ${x} + 3 =`, result: x + 3 },
        { operation: `Subtraction: ${x} - 3 =`, result: x - 3 },
        { operation: `Multiplication: ${x} * 3 =`, result: x * 3 },
        { operation: `Division: ${x} / 3 =`, result: x / 3 },
        { operation: `Remainder: ${x} % 3 =`, result: x % 3 },
        { operation: `Increment: ++${x} =`, result: ++x },
        { operation: `Decrement: --${x} =`, result: --x },
        { operation: `Exponentiation: ${x} ** 3 =`, result: x ** 3 }
    ];

    let table = '<table class="ws-table-all notranslate"><thead><tr><th>Operation</th><th>Result</th></tr></thead><tbody>';
    results.forEach(function(result) {
        table += `<tr><td>${result.operation}</td><td>${result.result}</td></tr>`;
    });
    table += '</tbody></table>';
    document.getElementById('myDiv').innerHTML = table;
    
};

document.querySelector('#myButton2').onclick = function(){
    let value2 = document.querySelector('.artNum2').value;
    let a = Number(value2);
    let results = [
        {operation: `Assignment: a =` , result:  a},
        {operation: `Addition Assignment: a += 5` , result:  a+=5},
        {operation: `Subtraction Assignment: a -= 5` , result:  a -= 5},
        {operation: `Multiplication Assignment: a *= 2` , result:  a *= 2},
        {operation: `Division Assignment: a /= 2` , result:  a /= 2},
        {operation: `Remainder Assignment: a %= 2` , result:  a %= 2},
        {operation: `Exponentiation Assignment: a **= 7` , result:  a **= 2},
    ]
    let table= `<table class="ws-table-all notranslate"><thead><th>Operation</th><th>Result</th></thead><tbody>`;
    results.forEach(function(result) {
        table += `<tr><td>${result.operation}</td><td>${result.result}</td></tr>`;
    });
    table += '</tbody></table>';
    document.getElementById('myDiv2').innerHTML = table;
}

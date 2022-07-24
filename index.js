//Console.log("Blah Blah Blah");

// console.log("Hello world");

// console.log("I like Javascript coding");

// console.log("console is like count in c++");

// Alerting coding
/*
window.alert("Save Your password!");

window.alert("Its the final warning!");

*/
/* the second warning will until you click okay on the 
first warning
*/

// A small Practice work
/*
let fullname, fname, village, job;
fullname = prompt("what is your fullname");
fname = prompt("what is your father name");
village = prompt("what is your village name");
job = prompt("what is your job");

document.getElementById("p1").innerHTML = "Your complete Detail:";
document.getElementById("p2").innerHTML = "Full name:" + " " + fullname;
document.getElementById("p3").innerHTML = "Father Name: " + fname;
document.getElementById("p4").innerHTML = "Village: " + village;
document.getElementById("p5").innerHTML = "Your Job is: " + job;

*/


/* Conversion of Variables

let age;
age=prompt("what is your age");

console.log(Number(age));
console.log("This is string=", String(age));
console.log("Boolean checking=", Boolean(age));


*/

/* Short Math program
Finding the Hypothenous of a triangle:
let a, b, c;
a = prompt("What is the base of triangle");
b = prompt("what is perpendicular of triangle");
a=Number(a);
b=Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
c=Math.round(Number(c));
console.log("The hypothenous is: ", c);
 */


/*From HTML
document.getElementById("submit").onclick=function (){

a=document.getElementById("atextbox").value;
b = document.getElementById("btextbox").value;
a=Number(a);
b=Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));
c=Math.round(Number(c));
document.getElementById("clabel").innerHTML="Side C = "+ c;

}
*/

/* Counter program!!

let count=0;

document.getElementById("dec").onclick= function(){

    count-=1;
    document.getElementById("countid").innerHTML=count;
    console.log(count);

}
document.getElementById("res").onclick= function(){

    count=0;
    document.getElementById("countid").innerHTML=count;
    
}
document.getElementById("inc").onclick= function(){

    count++;
    document.getElementById("countid").innerHTML=count;
    
}
*/


// Rolling dice game
/*
let x,y,z;



document.getElementById("B").onclick = function(){

    x=Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    z=Math.floor(Math.random()*6)+1;

    document.getElementById("dice1").innerHTML = "Dice 1= "+ x;
    document.getElementById("dice2").innerHTML = "Dice 2= "+ y;
    document.getElementById("dice3").innerHTML = "Dice 3= "+ z;
}

*/

//Extracting first name and last name using string properties and slice method.

/*
let firstname,lastname,fullname="Wagas Kon";

firstname=fullname.slice(0,fullname.indexOf(" "));
lastname = fullname.slice(fullname.indexOf(" ")+1);

console.log("first Name="+ firstname);
console.log("last Name="+ lastname);

*/


/* Ternary Operation
let marks, test;
marks=prompt("what is your marks!");
test=testing(marks);
console.log(test);
function testing(marks){
    return marks>=80 ? "You got A+" : "You have passed the examination" ;
}
*/

/* Template literals
let Username= "Waqas", items=34, total=500, text;

// console.log(`Hello ${Username}`);
// console.log(`You have ${items} items`);
// console.log(`Your total cost is $${total}`);

text=`Hello ${Username}<br>  You have ${items} items <br>  Your total cost is $${total}`;

console.log(text);
document.getElementById("te").innerHTML=text;
*/

/*
//Small Project
//Temperature Conversion into different Units 
document.getElementById("sub").onclick=function(){

    let temp;
    if(document.getElementById("Cel").checked){
    
        temp=Math.round(tocel(Number(document.getElementById("txt").value)));
        document.getElementById("lb3").innerHTML=temp+"°C";
    }
    else if (document.getElementById("Fah").checked){
        temp=Math.round(tocel(Number(document.getElementById("txt").value)));
        document.getElementById("lb3").innerHTML=temp+"°F";
    }
    else{
        document.getElementById("lb3").innerHTML="Choose any option!";

    }

}

function tocel(temp){  //tocel mean to Celsius
    return  (temp-32)*(5/9);

}

function tofah(temp){  //tocel mean to Fahrenheit
    return temp * 9 / 5 + 32;

} //Finished
*/

//Errors Handling
/*
try{

    let x=Number(prompt("Enter a Number"));
    if(isNaN(x)) throw "That's wasnt a number";
    if(x=="") throw "You did not enter anything";
    console.log("Finally you enter a numnber!");
    
}
catch{
    console.log("You missed up everything bro.")
}
finally{
    console.log("You are a wanted person!");

}
*/





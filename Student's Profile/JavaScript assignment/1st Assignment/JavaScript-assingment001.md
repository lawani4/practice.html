Question 1:


let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You are old enough to drive");
} else {
    let yearsLeft = 18 - age;
    console.log("You are left with " + yearsLeft + " years to drive");
}

Question 2:

let myAge = Number(prompt("Enter my age:"));
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
    console.log("You are " + (yourAge - myAge) + " years older than me.");
} else if (myAge > yourAge) {
    console.log("I am " + (myAge - yourAge) + " years older than you.");
} else {
    console.log("We are the same age.");
}

Question 3:

let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
    console.log(number + " is an even number");
} else {
    console.log(number + " is an odd number");
}

Question 4:

let score = Number(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score <= 79) {
    console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
} else if (score >= 50 && score <= 59) {
    console.log("D");
} else if (score >= 0 && score <= 49) {
    console.log("F");
} else {
    console.log("Invalid score");
}

Question 5:

let month = prompt("Enter the month:");

if (month === "September" || month === "October" || month === "November") {
    console.log("The season is Autumn.");
} else if (month === "December" || month === "January" || month === "February") {
    console.log("The season is Winter.");
} else if (month === "March" || month === "April" || month === "May") {
    console.log("The season is Spring.");
} else if (month === "June" || month === "July" || month === "August") {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month.");
}


Question 6:

let day = prompt("What is the day today?").toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(day + " is a weekend.");
} else {
    console.log(day + " is a working day.");
}

Question 7:

let month = prompt("Enter a month:").toLowerCase();

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    console.log(month + " has 31 days.");
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    console.log(month + " has 30 days.");
} else if (month === "february") {
    console.log(month + " has 28 days.");
} else {
    console.log("Invalid month.");
}

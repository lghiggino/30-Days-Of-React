console.log("available functions:")
console.table("ageCheck()","ageComparison()")

/*1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    Enter your age: 30
    You are old enough to drive.
    Enter your age:15
    You are left with 3 years to drive.*/
const para = document.querySelector("#para");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");

function ageCheck () {
    let age = prompt ("Enter your age", 18)
    if (isNaN(age)){
        return para.innerText = "age must be a number"
    }
    if(age > 18){
        return para.innerText = 'You are old enough to drive'
    }
    else{ 
        let yearsLeft = 18 - age
        return para.innerText = `You are left with ${yearsLeft} years to drive.`
    }
}
//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
function ageComparison(){
    let yourAge = prompt ("Enter your age", 18);
    const myAge = 39;
    if (isNaN(yourAge)){
        return para2.innerText = "age must be a number";
    }
    if (yourAge < myAge){
        let diff = myAge - yourAge
        return para2.innerText = `You are ${diff} years younger than me.`
    } 
    if (yourAge === myAge){
        return para2.innerText = `We are the same age`
    } else{
        let diff = yourAge - myAge
        return para2.innerText = `You are ${diff} years older than me.`
    }
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
//         using if else
//         ternary operator.
//     let a = 4
//     let b = 3
//       4 is greater than 3
function numberComparison(a,b){
    if(isNaN(a) || isNaN(b)){
        return para3.innerText = `One of those is not a number`
    }
    if (a > b){
        return para3.innerText = `${a} is bigger than ${b}`
    }
    if (a < b){
        return para3.innerText = `${a} is smaller than ${b}`
    } else { return para3.innerText = `${a} is equal to ${b}`}
}

function ternaryNumberComparison(a,b){
    if(isNaN(a) || isNaN(b)){
        return para3.innerText = `One of those is not a number`
    } if(a === b){
        return para3.innerText = `${a} is equal to ${b}`
    } else a > b ? para3.innerText = `${a} is bigger than ${b}` : para3.innerText = `${a} is smaller than ${b}`
}
/*  Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    Enter a number: 2
    2 is an even number
    Enter a number: 9
    9 is is an odd number.
*/
function isEven(a){
    if(isNaN(a)){
        return para4.innerText = "You must enter a number"
    }
    if(a % 2 === 0){
        return para4.innerText = `${a} is an even number`
    } else return para4.innerText = `${a} is an odd number`
}
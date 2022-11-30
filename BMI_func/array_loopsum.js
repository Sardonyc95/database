// Assignment 5
//1. var studentList = [
//     {
//         name: "Princess",
//         age:2,
//         class:"js1",
//         acctBal:200

//     },
//     {
//         name: "Hope",
//         age:1,
//         class:"js2",
//         acctBal:300

//     },
//     {
//         name: "Amarachi",
//         age:3,
//         class:"js3",
//         acctBal:450

//     },
//     {
//         name: "Vivian",
//         age:2,
//         class:3,
//         acctBal:600
//     }
// ];
  


//  given the details of every student in a class
//  compute the total amount of all their
//  account balance put together.
// //  ans = 1550


var studentList = [
    {
        name: "Princess",
        age:2,
        class:"js1",
        acctBal:200

    },
    {
        name: "Hope",
        age:1,
        class:"js2",
        acctBal:300

    },
    {
        name: "Amarachi",
        age:3,
        class:"js3",
        acctBal:450

    },
    {
        name: "Vivian",
        age:2,
        class:3,
        acctBal:600
    }
];

function AllstudentAcctBal() {
    var sumOfAllAcctBal = 0;
    for(var i = 0; i < studentList.length; i++){
        sumOfAllAcctBal = sumOfAllAcctBal + studentList[i].acctBal;
    }
    console.log(sumOfAllAcctBal);

  }
AllstudentAcctBal();


//2. Given a person's first name and last name is inputed into the prompt, alert the first letter of the first and last name only in capital letters.
//Eg. when i enter "Ogbodo Uchenna", it should alert OU.



function getNameIntials() {
    var fullName = prompt("enter your full name eg. first & last name");
    var newNameArr = fullName.split(" ");
    var initialRes = "";
    for (var i = 0; i < newNameArr.length; i++){
        initialRes = initialRes + newNameArr[i].substring(0,1);
    }
    alert(initialRes.toLocaleUpperCase);
    
}
getNameIntials();





//for_loop: object_array
//Assignment 3

// var classStudentsDetails = [
//     {
//         name: "Princess",
//         age:2,
//         class:"js1"
//     },
//     {
//         name: "Hope",
//         age:1,
//         class:"js2"
//     },
//     {
//         name: "Amarachi",
//         age:3,
//         class:"js3"
//     },
//     {
//         name: "Vivian",
//         age:2,
//         class:"js1"
//     },

// ];


// // loop through it and print out a sentence of this format.
// // My name is ......., I am ........ old and I am in class ......;

//code starts here//
// var classStudentsDetails = [
//     {
//         name: "Princess",
//         age:2,
//         class:"js1"
//     },
//     {
//         name: "Hope",
//         age:1,
//         class:"js2"
//     },
//     {
//         name: "Amarachi",
//         age:3,
//         class:"js3"
//     },
//     {
//         name: "Vivian",
//         age:2,
//         class:"js1"
//     },

// ];


// for(var i = 0; i < classStudentsDetails.length; i++) {
//     console.log("My name is" + " " + classStudentsDetails[i] .name + "," +
//      " " + "I am"+ " " + classStudentsDetails [i].age + " " + "years old"+
//     " " + "and I am in" + " " + classStudentsDetails[i].class);
//     // if (classStudentsDetails[i].name == "Amarachi") {
//     //     console.log("My name is " + classStudentsDetails[i].name + "," + " I am " + classStudentsDetails[i].age + " years old and I am in class" + " " + classStudentsDetails[i].class);
//     // break;
//     // }
   
// // }
// //code ends here//

// Assignment 4
// 1. find out the difference:
// amount == 5;
// amount === 5;



//reverse_loop(string)
2. // create a function that takes in a word on the prompt and alerts the reverse of that word
// if I input "Hope", it should give me back "epoH";

// //Soln 1:
// function reverseWord() {
//     var name = prompt("what is your name");
//     var newName = "";
//     for (i = name.length - 1; i >= 0; i--){
//         newName = newName + name[i];
//     }
//     alert(newName);
// }
// reverseWord();

// //Soln 2:
// function reverseWord() {
//     var name = prompt("what is your name");
//     var newName = (name.split("").reverse().join(""));
    
//     alert(newName);
       //alert(name.split("").reverse().join(""));

// }
// reverseWord();

// //Soln 3:
// function reverseString() {
//     var newString = " ";
//     var str = prompt("type a word");
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     alert(newString);
//or   alert(newString.trim());
// }
// reverseString();

//Soln 4:
// function takeInWord(){
//     var typeAWord = prompt("type in any word");
   
//convert string to arr &  reverse i
//     let reversedWord = Array.from(typeAWord).reverse().join('');
//     alert(reversedWord)
   
//      }
  
//      takeInWord()


//Assignment 6
// for  the previous assignment 4, given the same array produce the same result
// using the map and forEach method in es6; reseach the difference between the two methods


var classStudentsDetails = [
    {
        name: "Princess",
        age:2,
        class:"js1"
    },
    {
        name: "Hope",
        age:1,
        class:"js2"
    },
    {
        name: "Amarachi",
        age:3,
        class:"js3"
    },
    {
        name: "Vivian",
        age:2,
        class:"js1"
    },
    
];

//soln 1: array.map(method)
// var sentence = classStudentsDetails.map (element =>
//     console.log("My name is" + " " + element.name + "," + " " + "I am" + " " + element.age + " " + "years old" + " " + "and I am in" + " " + element.class));

//soln 2: array.forEach(method)
// var sentence = classStudentsDetails.forEach(element => console.log("My name is" + " " + element.name + "," + " " + "I am" + " " + element.age + " " + "years old" + " " + "and I am in" + " " + element.class));
    

//2. Also find the students whose ages are less than 2 years
// also filter the students whose ages are less than 2 years

//soln 2: array.find(method)
// var studentslessthan2 = classStudentsDetails.find(element => element[i].age < 2);

// console.log(studentslessthan2);


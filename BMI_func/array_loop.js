//for_loop: object_array
//Assignment 4

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
   
// }
//code ends here//


//reverse_loop(string)
//Assignment 5
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


//Soln 2:
function reverseWord() {
    var name = prompt("what is your name");
    alert(name.split(""), reverse().join(""));
    
}
reverseWord();


// //Soln 3:
// function reverseString() {
//     var newString = " ";
//     var str = prompt("type a word");
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; 
//     }
//     alert(newString);
// }
// reverseString();


//Soln 4:
// function takeInWord(){
//     var typeAWord = prompt("type in any word");
   
//    //convert string to arr &  reverse i
//     let reversedWord = Array.from(typeAWord).reverse().join('');
//     alert(reversedWord)
   
//      }
  
//      takeInWord()
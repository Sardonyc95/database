//Variables, Datatypes
// Assignment 1
1. //Create an object of human with their basic features such as
//name, height, gender, maritalStatus, occupation, salary,
2. // and a function that takes the weight and prints the person's BMI

console.log("Application to display Users details & BMI");

var person = {
    name: "Amarachi",
    height: 5,
    gender: "female",
    isSingle: true,
    occupation: "trainee",
    salary: 10000,
    calculateBMI: function (BW) {
        var BMI = BW / (this.height * this.height);
        console.log(BMI + "kg/m^2");
    }


}

//console.log(person);
console.log(person.name);
console.log(person.height + "meters");
console.log(person.gender);
console.log(person.isSingle);
console.log(person.occupation);
console.log(person.salary);  
person.calculateBMI(60);











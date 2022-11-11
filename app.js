console.log("Hello teamates");

var obj = {
    name: "Amarachi",
    height: 5,
    gender: "female",
    isSingle: true,
    occupation: "trainee",
    salary: 10000,
    calculateBMI: function (BW) {
        var BMI = BW / (obj.height * obj.height);
        console.log(BMI);
    }


}


console.log(obj.name);
console.log(obj.height);
console.log(obj.gender);
console.log(obj.isSingle);
console.log(obj.occupation);
console.log(obj.salary);
obj.calculateBMI(60);


console.log("Hello teamates");

var obj = {
    name: "Amarachi",
    height: 5.2, //"meters",
    gender: "female",
    isSingle: true,
    occupation: "trainee",
    salary: null,
    calculateBMI: function(BW, height){
        console.log(BW / height * height)
    }


}


console.log(obj.name);
console.log(obj.height);
console.log(obj.gender);
console.log(obj.isSingle);
console.log(obj.occupation);
console.log(obj.salary);
obj.calculateBMI(50, 5.2);  //"kilograms");


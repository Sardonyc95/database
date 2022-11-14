//Variables, Datatypes
// Assignment 1
1. //Create an object of human with their basic features such as
//name, height, gender, maritalStatus, occupation, salary,
2. // and a function that takes the weight and prints the person's BMI

//console.log("Application to display Users details & BMI");

//var person = {
    //name: "Amarachi",
    //height: 5,
    //gender: "female",
    //isSingle: true,
    //occupation: "trainee",
    //salary: 10000,
    //calculateBMI: function (BW) {
        //var BMI = BW / (this.height * this.height);
        //console.log(BMI + "kg/m^2");
    //}


//}

//console.log(person);
//console.log(person.name);
//console.log(person.height + "meters");
//console.log(person.gender);
//console.log(person.isSingle);
//console.log(person.occupation);
//console.log(person.salary);
//person.calculateBMI(60);



// create a currency converter app that takes
//in the amount and currency and converts it to naira

alert("welcome to your currency converter");

function convertCurrencytoNaira() {
  var currencyOwned = prompt("What currency do you have? (USD, GBP, EUR)");
  var amount = prompt("How much do you?");

  if (currencyOwned == "USD") {
    alert(amount * 700 + " " + "Naira");
  } else if (currencyOwned == "GBP") {
    alert(amount * 800 + " " + "Naira");
  } else if (currencyOwned == "EUR") {
    alert(amount * 750 + " " + "Naira");
  } else {
    alert(amount + " " + currencyOwned);
  }
}
convertCurrencytoNaira();

alert("welcome to your currency converter");

function currencyConverter() {
  var currencyOwned = prompt("What currency do you have? (USD, GBP, EUR)");
  var amount = prompt("How much do you?");
  var CurrencyToGet = prompt("What currency do you want in return?(USD, GBP, EUR)");

  if(currencyOwned == "EUR" && CurrencyToGet == "USD"){
    alert(amount * 1.04 + "" + "USD");

  }else if(currencyOwned == "EUR" && CurrencyToGet == "GBP"){
    alert(amount * 0.888 + " " + "GBP");

  }else if(currencyOwned == "USD" && CurrencyToGet == "EUR"){
     alert(amount * 0.96 + " " + "EUR");

  }else if(currencyOwned == "USD" && CurrencyToGet == "GBP"){
     alert(amount * 0.85 + " " + "GBP");

  }else if(currencyOwned == "GBP" && CurrencyToGet == "USD"){
    alert(amount * 1.8 + " " + "USD");
  }
  else if(currencyOwned == "GBP" && CurrencyToGet == "EUR"){
     alert(amount * 1.14 + " " + "EUR");
  }
  else{
  alert("We can only exchange EUR, GBP or USD");
  }
}
currencyConverter();









//concatenation, Prompt, Alert(using if or else statement)
//Assignment 2
1.  // create a currency converter app that takes
//in the amount and currency and converts it to naira


console.log("Application for naira currency converter app");

alert("Hi, welcome to your naira currency converter");

var currencyType = prompt("what currency do you want to convert? e.g USD, Naira, GBP, EUR, Yen, etc.");

if(currencyType == "USD") {
    alert(1 + "USD" + " " + "=" + " " + 980 + " " + "Naira");
    var currencyamount = prompt("How much do you want to convert?");
    alert(currencyamount * 980 + " " + "Naira");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "GBP") {
    alert(1 + "GBP" + " " + "=" + " " + 800 + " " + "Naira");
    var currencyamount = prompt("How much do you want to convert?");
    alert(currencyamount * 800 + " " + "Naira");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "EUR") {
    alert(1 + "EUR" + " " + "=" + " " + 750 + " " + "Naira");
    var currencyamount = prompt("How much do you want to convert?");
    alert(currencyamount * 750 + " " + "Naira");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "Cedis") {
    alert(1 + "Cedis" + " " + "=" + " " + 600 + " " + "Naira");
    var currencyamount = prompt("How much do you want to convert?");
    alert(currencyamount * 600 + " " + "Naira");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "Yen") {
    alert(1 + "Yen" + " " + "=" + " " + 300 + " " + "Naira");
    var currencyamount = prompt("How much do you want to convert?");
    alert(currencyamount * 300 + " " + "Naira");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}




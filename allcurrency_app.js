2. // create an application that takes in the currency you want to change
// the currency you desire to get and the amount you desire to change,
// let the result be the amount of the deired currency with the currency code you want to change
// with the currency code concatinated after it.


console.log("Application for all currency converter app");

alert("Hi, welcome to your all currency converter");

var currencyType1 = prompt("what currency do you want to convert? e.g USD, Naira, GBP, EUR, Yen, etc.");
var currencyType2 = prompt("what currency do you want to convert to? e.g USD, Naira, GBP, EUR, Yen, etc.");

if(currencyType1 == "USD") {
    var currencyamount = prompt("How much [USD] do you want to convert?");
    if(currencyType2 == "Naira") {
        alert(1 + "USD" + " " + "=" + " " + 980 + " " + "Naira");
        alert(currencyamount * 980 + " " + "Naira");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert(1 + "USD" + " " + "=" + " " + 800 + " " + "GBP");
        alert(currencyamount * 800 + " " + "GBP");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert(1 + "USD" + " " + "=" + " " + 750 + " " + "EUR");
        alert(currencyamount * 750 + " " + "EUR");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Cedis") {
        alert(1 + "USD" + " " + "=" + " " + 600 + " " + "Cedis");
        alert(currencyamount * 600 + " " + "Cedis");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Yen") {
        alert(1 + "USD" + " " + "=" + " " + 300 + " " + "Yen");
        alert(currencyamount * 300 + " " + "Yen");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }
}else if(currencyType1 == "Naira") {
    var currencyamount = prompt("How much [Naira] do you want to convert?");
    if(currencyType2 == "USD") {
        alert(1 + "Naira" + " " + "=" + " " + 0.00102 + " " + "USD");
        alert(currencyamount * 0.00102 + " " + "USD");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert(1 + "Naira" + " " + "=" + " " + 0.00125 + " " + "GBP");
        alert(currencyamount * 0.00125 + " " + "GBP");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert(1 + "Naira" + " " + "=" + " " + 0.001333 + " " + "EUR");
        alert(currencyamount * 0.001333 + " " + "EUR");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Cedis") {
        alert(1 + "Naira" + " " + "=" + " " + 0.001666 + " " + "Cedis");
        alert(currencyamount * 0.001666 + " " + "Cedis");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Yen") {
        alert(1 + "Naira" + " " + "=" + " " + 0.00333 + " " + "Yen");
        alert(currencyamount * 0.00333 + " " + "Yen");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }
}else if(currencyType1 == "GBP") {
    var currencyamount = prompt("How much [GBP] do you want to convert?");
    if(currencyType2 == "USD") {
        alert(1 + "GBP" + " " + "=" + " " + 0.00125 + " " + "USD");
        alert(currencyamount * 0.00125 + " " + "USD");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Naira") {
        alert(1 + "GBP" + " " + "=" + " " + 0.00125 + " " + "Naira");
        alert(currencyamount * 0.00125 + " " + "Naira");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert(1 + "GBP" + " " + "=" + " " + 0.0000266 + " " + "EUR");
        alert(currencyamount * 0.0000266 + " " + "EUR");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Cedis") {
        alert(1 + "GBP" + " " + "=" + " " + 0.000066 + " " + "Cedis");
        alert(currencyamount * 0.000066 + " " + "Cedis");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "Yen") {
        alert(1 + "GBP" + " " + "=" + " " + 0.000033 + " " + "Yen");
        alert(currencyamount * 0.000033 + " " + "Yen");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }
}
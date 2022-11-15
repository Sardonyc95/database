//concatenation, Prompt, Alert(using if or else statement)
//Assignment 2
1.  // create a currency converter app that takes
//in the amount and currency and converts it to naira


console.log("Application for naira currency converter app");

alert("Hi, welcome to your naira currency converter");

    var currencyType = prompt("what currency do you want to convert to NGN? e.g USD, GBP, EUR, GHC, JPY, etc.");

if(currencyType == "USD") {
    alert("Conversion rate:" + " " + 1 + " " + "$" + "=" + " " + 700 + " " + "₦");
    var currencyamount = prompt("How much [USD] do you want to convert?");
    alert("Amount converted =" + " " + currencyamount * 700 + " " + "₦");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "GBP") {
    alert("Conversion rate:" + " " + 1 +" " +  "£" + " " + "=" + " " + 507.06370 + " " + "₦");
    var currencyamount = prompt("How much [GBP] do you want to convert?");
    alert("Amount converted =" + " " + currencyamount * 507.06370 + " " + "₦");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "EUR") {
    alert("Conversion rate:" + " " + 1 + " " + "€" + " " + "=" + " " + 445.24240 + " " + "₦");
    var currencyamount = prompt("How much [EUR] do you want to convert?");
    alert("Amount converted =" + " " + currencyamount * 445.24240 + " " + "₦");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "GHC") {
    alert("Conversion rate:" + " " + 1 + " " + "GH¢" + " " + "=" + " " + 31.48190 + " " + "₦");
    var currencyamount = prompt("How much [GHC] do you want to convert?");
    alert("Amount converted =" + " " + currencyamount * 31.48190 + " " + "₦");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}else if (currencyType == "JPY") {
    alert("Conversion rate:" + " " + 1 + " " + "¥" + " " + "=" + " " + 3.03320 + " " + "₦");
    var currencyamount = prompt("How much [JPY] do you want to convert?");
    alert("Amount converted =" + " " + currencyamount * 3.03320 + " " + "₦");
    var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
}
naira_currency_converter();













 
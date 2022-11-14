2. // create an application that takes in the currency you want to change
// the currency you desire to get and the amount you desire to change,
// let the result be the amount of the deired currency with the currency code you want to change
// with the currency code concatinated after it.


console.log("Application for all currency converter app");

alert("Hi, welcome to your all currency converter");

var currencyType1 = prompt("what currency do you want to convert? e.g USD, NGN, GBP, EUR, GHC, JPY etc.");
var currencyType2 = prompt("what currency do you want to exchange? e.g USD, NGN, GBP, EUR, GHC, JPY etc.");

if(currencyType1 == "USD") {
    var currencyamount = prompt("How much [USD] do you want to convert?");
    if(currencyType2 == "NGN") {
        alert("Conversion rate:" + " " + 1 + " " + "$" + "=" + " " + 700 + " " + "₦");
        alert("Amount converted [USD] =" + " " + currencyamount * 700 + " " + "₦");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert("Conversion rate:" + " " + 1 +" " +  "$" + " " + "=" + " " + 0.87524 + " " + "£");
        alert("Amount converted [USD] =" + " " + currencyamount * 0.87524 + " " + "£");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert("Conversion rate:" + " " + 1 + " " + "$" + " " + "=" + " " + 0.99676 + " " + "€");
        alert("Amount converted [USD] =" + " " + currencyamount * 0.99676 + " " + "€");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GHC") {
        alert("Conversion rate:" + " " + 1 + " " + "$" + " " + "=" + " " + 14.09699 + " " + "GH¢");
        alert("Amount converted [USD] =" + " " + currencyamount * 14.09699 + " " + "GH¢");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "JPY") {
        alert("Conversion rate:" + " " + 1 + " " + "$" + " " + "=" + " " + 146.31412 + " " + "¥");
        alert("Amount converted [USD] =" + " " + currencyamount * 146.31412 + " " + "¥");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }

}else if(currencyType1 == "NGN") {
    var currencyamount = prompt("How much [NGN] do you want to convert?");
    if(currencyType2 == "USD") {
        alert("Conversion rate:" + " " + 1 + " " + "₦" + "=" + " " + 0.00142857 + " " + "$");
        alert("Amount converted [NGN] =" + " " + currencyamount * 0.00142857 + " " + "$");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert("Conversion rate:" + " " + 1 + " " + "₦" + "=" + " " + 0.00197 + " " + "£");
        alert("Amount converted [NGN] =" + " " + currencyamount * 0.00197 + " " + "£");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert("Conversion rate:" + " " + 1 + " " + "₦" + "=" + " " + 0.00225 + " " + "€");
        alert("Amount converted [NGN] =" + " " + currencyamount * 0.00225 + " " + "€");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GHC") {
        alert("Conversion rate:" + " " + 1 + " " + "₦" + "=" + " " + 0.03176 + " " + "GH¢");
        alert("Amount converted [NGN] =" + " " + currencyamount * 0.03176 + " " + "GH¢");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "JPY") {
        alert("Conversion rate:" + " " + 1 + " " + "₦" + "=" + " " + 0.32968 + " " + "¥");
        alert("Amount converted [NGN] =" + " " + currencyamount * 0.32968 + " " + "¥");
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
        alert("Conversion rate:" + " " + 1 + " " + "£" + "=" + " " + 1.14255 + " " + "$");
        alert("Amount converted [GBP] =" + " " + currencyamount * 1.14255 + " " + "$");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "NGN") {
        alert("Conversion rate:" + " " + 1 + " " + "£" + "=" + " " + 507.06370 + " " + "₦");
        alert("Amount converted [GBP] =" + " " + currencyamount * 507.06370 + " " + "₦");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert("Conversion rate:" + " " + 1 + " " + "£" + "=" + " " + 1.13885 + " " + "€");
        alert("Amount converted [GBP] =" + " " + currencyamount * 1.13885 + " " + "€");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GHC") {
        alert("Conversion rate:" + " " + 1 + " " + "£" + "=" + " " + 16.10652 + " " + "GH¢");
        alert("Amount converted [GBP] =" + " " + currencyamount * 0.03176 + " " + "GH¢");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "JPY") {
        alert("Conversion rate:" + " " + 1 + " " + "£" + "=" + " " + 167.17121 + " " + "¥");
        alert("Amount converted [GBP] =" + " " + currencyamount * 167.17121 + " " + "¥");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }

}else if(currencyType1 == "EUR") {
    var currencyamount = prompt("How much [EUR] do you want to convert?");
    if(currencyType2 == "USD") {
        alert("Conversion rate:" + " " + 1 + " " + "€" + "=" + " " + 1.00325 + " " + "$");
        alert("Amount converted [EUR] =" + " " + currencyamount * 1.00325 + " " + "$");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "NGN") {
        alert("Conversion rate:" + " " + 1 + " " + "€" + "=" + " " + 445.24240 + " " + "₦");
        alert("Amount converted [EUR] =" + " " + currencyamount * 445.24240 + " " + "₦");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert("Conversion rate:" + " " + 1 + " " + "€" + "=" + " " + 0.87808 + " " + "£");
        alert("Amount converted [EUR] =" + " " + currencyamount * 0.87808 + " " + "£");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GHC") {
        alert("Conversion rate:" + " " + 1 + " " + "€" + "=" + " " + 14.14281 + " " + "GH¢");
        alert("Amount converted [EUR] =" + " " + currencyamount * 14.14281 + " " + "GH¢");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "JPY") {
        alert("Conversion rate:" + " " + 1 + " " + "€" + "=" + " " + 146.78966 + " " + "¥");
        alert("Amount converted [EUR] =" + " " + currencyamount * 146.78966 + " " + "¥");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }

}else if(currencyType1 == "GHC") {
    var currencyamount = prompt("How much [GHC] do you want to convert?");
    if(currencyType2 == "USD") {
        alert("Conversion rate:" + " " + 1 + " " + "GH¢" + "=" + " " + 0.07094 + " " + "$");
        alert("Amount converted [GHC] =" + " " + currencyamount * 0.07094 + " " + "$");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "NGN") {
        alert("Conversion rate:" + " " + 1 + " " + "GH¢" + "=" + " " + 31.48190 + " " + "₦");
        alert("Amount converted [GHC] =" + " " + currencyamount * 31.48190 + " " + "₦");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert("Conversion rate:" + " " + 1 + " " + "GH¢" + "=" + " " + 0.06209 + " " + "£");
        alert("Amount converted [GHC] =" + " " + currencyamount * 0.06209 + " " + "£");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert("Conversion rate:" + " " + 1 + " " + "GH¢" + "=" + " " + 0.07071 + " " + "€");
        alert("Amount converted [GHC] =" + " " + currencyamount * 0.07071 + " " + "€");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "JPY") {
        alert("Conversion rate:" + " " + 1 + " " + "GH¢" + "=" + " " + 10.37910 + " " + "¥");
        alert("Amount converted [GHC] =" + " " + currencyamount * 10.37910 + " " + "¥");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }

}else if(currencyType1 == "JPY") {
    var currencyamount = prompt("How much [JPY] do you want to convert?");
    if(currencyType2 == "USD") {
        alert("Conversion rate:" + " " + 1 + " " + "¥" + "=" + " " + 0.00683 + " " + "$");
        alert("Amount converted [JPY] =" + " " + currencyamount * 0.00683 + " " + "$");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "NGN") {
        alert("Conversion rate:" + " " + 1 + " " + "¥" + "=" + " " + 3.03320 + " " + "₦");
        alert("Amount converted [JPY] =" + " " + currencyamount * 3.03320 + " " + "₦");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GBP") {
        alert("Conversion rate:" + " " + 1 + " " + "¥" + "=" + " " + 0.00598 + " " + "£");
        alert("Amount converted [JPY] =" + " " + currencyamount * 0.00598 + " " + "£");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "GHC") {
        alert("Conversion rate:" + " " + 1 + " " + "¥" + "=" + " " + 0.09635 + " " + "GH¢");
        alert("Amount converted [JPY] =" + " " + currencyamount * 0.09635 + " " + "GH¢");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }else if (currencyType2 == "EUR") {
        alert("Conversion rate:" + " " + 1 + " " + "¥" + "=" + " " + 0.00681 + " " + "€");
        alert("Amount converted [JPY] =" + " " + currencyamount * 0.00681 + " " + "€");
        var transaction_continues = prompt("Do you want to perform another transaction?");
    if(transaction_continues == "yes"){
        alert("Reload page and continue. Thanks!!!");
    } else if (transaction_continues == "no"){
        alert("Thanks and Goodbye!!!");
    }
    }
}
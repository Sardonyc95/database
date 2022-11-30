//Anagram algorithm
//soln 1:
// function checkAnagram(firstword, secondword) {
//     firstword.split("").sort().join("") == secondword.split("").sort().join("") ? console.log(true):console.log(false);
    
// }
// checkAnagram("binary", "brainy");

//soln 2:
var sortstring = word.split("").sort().join("");
var printRes = console.log(true);

function checkAnagram(firstword, secondword) {
    sortstring(firstword) == sortstring(secondword) ?
    printRes(true) : printRes(false);
}
checkAnagram(binary, brainy);

//soln 3:
function sortString(word) {
    return word.split("").sort().join("")
}
function printRes(res) {
    return console.log(res)
}
function checkAnagram(firstword, secondword) {
    sortString(firstword) == sortString(secondword) ?
    printRes(true) : printRes(false);
}
checkAnagram(binary, brainy);

//soln 4:
function sortString(word) {
    return word.split("").sort().join("")
}
function printRes(ans) {
    return console.log(ans)
}
function checkAnagram(word1, word2) {
    sortString(word1) == sortString(word2) ? printResult(true):printResult(false)
}
checkAnagram(binary, brainy);


//Pangram algorithm
//soln 1:
const isPangram = (word) =>{

    let answer;
    //let str = word.replace(" ","");
    let newArr = [];
    let arr = word.split("");
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == " ") {
            arr[i] = ""
        }
    }
    let joinedStr = arr.join("");
    for(let i = 0; i < joinedStr.length; i++){
        for (let j = i + 1; j < joinedStr.length; j++){
            if(joinedStr[i] != joinedStr[j]) {
                newArr.push(joinedStr[i]);
            }
        }
    }
    if(word.length < 26) {
        answer = false;
    }else if(newArr.length < 26) {
        answer = false;
    }else{
        answer = "thank God";
    }
    console.log(answer)
}

const args = "The quick brown fox jumps over the lazy dog";
isPangram(args)

//soln 2:
function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/gi;
    //return (string.match(regex) || []).length === 26;
    console.log(string.match(regex) || []).length === 26;
}
isPangram(args)


//Palindrome algorithm
const isPalindrome = (word1) => {
    console.log(word1 === word1.spilt("").reverse().join(""))
}

isPalindrome("lawal");


//Recursion in Fibonacci algorithm
//soln 1:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));




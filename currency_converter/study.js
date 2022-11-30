// const isPalindrome = (word1) =>{
//     console.log(word1 === word1.spilt("").reverse().join(""))
// }
// isPalindrome("lawal");

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

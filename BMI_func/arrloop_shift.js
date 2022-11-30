//Assignment 7
//1. Given an array of numbers from 1-30, write a program to replace the values that are divisible by 3 with "beans", the values divisible by 5 with "cake" and the values divisible by 3 and 5 with "beans cake".

//soln 1:
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function numdivisible(newArr) {
    var res = [];
    for (i = 0; i < newArr.length; i++){
        if (i == 0) {
            res.push()
        }
        else if (newArr[i] % 3 == 0){
            res.push("beans");
        }
        else if (newArr[i] % 5 == 0) {
            res.push("cake");
        }
        else if (newArr[i] % 3 && numArr[i] % 5 == 0) {
            res.push("beans cake");
        }
        else {
            res.push(newArr[i])
        }
    }
    console.log(res);
}
numdivisible(numArr);


//soln 2:
// function beansCake(arrInput){
//     const res = [];
//         for(var i = 0; i <= arrInput.length; i++ ){
//             if(i == 0){
//                 res.push()
//             }
//             else if(arrInput[i] % 5 == 0 && arrInput[i] % 3 == 0){
//                 res.push("beansCake");
//             }
//             else if(i % 3 == 0){
//                 res.push("beans");
//             }else if( i % 5 == 0){
//                 res.push("cake");
//             }else{
//                 res.push(arrInput[i])
    
//             }
//         }
//         console.log(res);
//     }
//     var myArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30];
//     beansCake(myArr);
// // Write your code below this line.
// //Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.




// let randNum = Math.floor(Math.random() * 10)


// console.log(randNum)

function luckyNumbers(n){
    //I need to make an answer array. Iwill declare an empty array
    let luckyNumbers = []
    //until my answer array is size n, do this:
    while (luckyNumbers.length < n){
    //get a random number between 1 and 10
        let randNums = Math.floor(Math.random() * 10 + 1)

    //if it alreadt exists in the array, dont add it in
        if (!luckyNumbers.includes(randNums)){
                luckyNumbers.push(randNums)
        }
    //finally, when my array is size n, I can return it from the function
    }
    return luckyNumbers
}

let result1 = luckyNumbers(2)
let result2 = luckyNumbers(6)
let result3 = luckyNumbers(10)

console.log(result1)
console.log(result2)
console.log(result3)


// function luckyNumbersEf() {
//     let luckyNumbersPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     let luckyNumbers = []

//     while (luckyNumbers.length < n){
//         let randIndex = Math.floor(Math.random() * luckyNumbersPool.length)
//         //slice or splice out at the number at index randIndex from luckyNumbersPool
//         //add that NUmber to lucky numbers

//     }
//     //return lucky Numbers
// }
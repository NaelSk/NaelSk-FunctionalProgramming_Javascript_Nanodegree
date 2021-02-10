// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
function reverse(ls) {
    let reLs = []
    ls.map(x => reLs.unshift(x))
    return reLs;
}
console.log(reverse(start))

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code
function concatWith(ls, op) {
    const result = ls.join(op);
    return result;
}
function JobName(ls) {
    let result = ls.map(x => concatWith(reverse(x), ": "));
    return result; 
}

console.log(JobName(shipMates))
// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code
function evenOrOdd(str) {
    if (str.length % 2 == 0) return str + ": even";
    return str+": odd"
}
function nameEO(ls) {
    return ls.map(x => evenOrOdd(x));
}
console.log(nameEO(awayTeam))
// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// your code

// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array? 
// Take a closer look at the last two arguments of map, one of them might be able to help

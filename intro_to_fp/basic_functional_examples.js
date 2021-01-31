// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
function greeting() {
    const time = new Date().getHours();
    if (time >= 12) {
        return "good afternoon"
    } else {
        return "good morning"
    }
}

console.log(greeting());



// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------
function countdown(number) {
    let ls = [];
    if (number <= 0) {
        return ls;
    }else {
        for (i = number; i > -1; i--) {
            ls.push(i);
        };
        return ls;
    };
};
console.log(countdown(5));

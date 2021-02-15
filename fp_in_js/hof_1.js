// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two
const squeer = function (n) { return n * n };


const addTwo = (callback) => {
    return (x => callback(x) + 2)
}

const x = addTwo(squeer);
console.log(x(2));


// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
    return `${title} ${first_name} ${last_name}`
}

const greeting = (fun) => {
    return ((x, y, z) => "Hi ".concat(fun(x, y, z)))
}
const y = greeting(createFullName);
console.log(y("Nael", "Soukouti", "Dr"))


// you might notice that this function is less than ideal - that's great! We'll talk about why next
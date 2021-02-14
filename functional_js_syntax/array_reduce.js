// 1. Take this disjointed sentence and turn it into a single string
const text = ['The ships', 'hung in the sky,', 'much the way', 'that bricks don`t']

// Your Code Here
const t = text.reduce((total, currentV) => total+currentV);
console.log(t);

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
    {
        team: 'A',
        score: 20
    },
    {
        team: 'B',
        score: 17
    },
    {
        team: 'C',
        score: 23
    },
    {
        team: 'D',
        score: 13
    }
]

// Your Code Here
const winer = scores.reduce((total, currentV) => {
    if (currentV.score > total.score) return currentV;
    else return total;
    }
);

console.log(winer.team);
// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastestq

// star ship

const ships = [
    {
        name: 'Serenity',
        speed: '4.2G',
    },
    {
        name: 'Cylon Raider',
        speed: '7.5G',
    },
    {
        name: 'Swordfish II',
        speed: '50G',
    },
    {
        name: 'Tie Fighters',
        speed: '4100G',
    }
]

let fastest = ships.reduce((fastesShip, currentShip) => {
    const currentSpeed = parseInt(currentShip.speed.slice(0, -1));
    const fastestSpeed = parseInt(fastesShip.speed.slice(0, -1));
    if (currentSpeed > fastestSpeed) return currentShip;
    else return fastesShip;
}
);


// Your Code Here
console.log(fastest.name)
// Expected output: Tie Fighters
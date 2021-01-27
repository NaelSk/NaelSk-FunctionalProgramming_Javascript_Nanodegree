// Directions: Rewrite the imperative code below as Object-Oriented 


function Engine(status, warp, type) {
    this.status = status;
    this.warp = warp;
    this.type = type;
    
}

Engine.prototype.getStatus = function () {
    let status_report = 'Captain, ';
    if (this.status === 'active' && this.warp <= 4) {
        status_report += 'the engines are active and we could be going faster.'
    } else if (this.status === 'active' && this.warp > 4) {
        status_report += 'the engines are active and we are going ' + this.warp + '.'
    } else if (this.status === 'down') {
        status_report += 'the engines are down.'
    } else {
        status_report += 'the comms are down and we can`t reach engineering.'
    }

    return status_report;
}
let eng = new Engine('active', 2, 'Dilithium Crystal')

let status = 'active'
let warp = 2
let type = 'Dilithium Crystal'
let status_report = 'Captain, '

if(status === 'active' && warp <= 4) {
    status_report += 'the engines are active and we could be going faster.'
} else if (status === 'active' && warp > 4) {
    status_report += 'the engines are active and we are going ' + warp + '.'
} else if (status === 'down') {
    status_report += 'the engines are down.'
} else {
    status_report += 'the comms are down and we can`t reach engineering.'
}

console.log(status_report);
console.log(eng.getStatus());

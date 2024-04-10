/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 * 
 */


function somar(a , b){
    return Number(a) + Number(b);
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function multi(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    return Number(a) / Number(b);
}
module.exports = {
    somar,
    sub,
    multi,
    div,

}
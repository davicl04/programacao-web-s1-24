function verificarNumeroPrimo(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function retornarNumeroPrimo(x) {

    if (verificarNumeroPrimo(x)) {
        console.log(`O numero ${x} é primo`);    
    }
    else{
        console.log(`O numero ${x} não é primo`);
    }
}

module.exports = {
    verificarNumeroPrimo,
    retornarNumeroPrimo
}
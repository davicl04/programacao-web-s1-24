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
retornarNumeroPrimo(0);
retornarNumeroPrimo(1);
retornarNumeroPrimo(2);
retornarNumeroPrimo(3);
retornarNumeroPrimo(7);
retornarNumeroPrimo(83);
retornarNumeroPrimo(100);
retornarNumeroPrimo(991);
retornarNumeroPrimo(104729);
retornarNumeroPrimo(14348907);


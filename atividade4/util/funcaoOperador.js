function imprimirOperacaov3(op, x, y){
    let z;
    switch (op) {
        case "soma":
            z = x+y
            break;
        case "subtrair":
            z = x-y
            break;
        case "multiplicar":
            z = x*y
            break;
        case "dividir":
            z = x/y
            break;    
    
        default:
            break;
    }
    console.log(`Resultado de uma ${op} entre ${x} e ${y} é ${z} `);

}

module.exports = {
    imprimirOperacaov3
}
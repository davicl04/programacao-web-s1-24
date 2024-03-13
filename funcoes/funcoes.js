function imprimirOperacao(){
    const x = 2;
    const y = 3;

    console.log(`Resultado de uma soma entre ${x} e ${y} é ${x+y} `);
}

imprimirOperacao();

function imprimirOperacaov2(x, y){
    console.log(`Resultado de uma soma entre ${x} e ${y} é ${x+y} `);
}

imprimirOperacaov2(6, 7)
imprimirOperacaov2(6, 10)

function imprimirOperacaov3(x, y, op){
    let z;
    switch (op) {
        case "+":
            z = x+y
            break;
        case "-":
            z = x-y
            break;
        case "*":
            z = x*y
            break;
        case "/":
            z = x/y
            break;    
    
        default:
            break;
    }
    console.log(`Resultado de uma ${op} entre ${x} e ${y} é ${z} `);

}

imprimirOperacaov3(8, 9, 'j')
    
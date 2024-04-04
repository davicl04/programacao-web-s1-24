const express = require('express');
const func = require('./util/funcaoOperador');
const app = express();

app.get('/funcaoOperador/:op/:x/:y', function(res, req){
    let x = req.params.x;
    let y = req.params.y;
    let op = req.params.op;

    let operac = func.imprimirOperacaov3(op, x, y);
    res.send(operac);

});


const PORT = 100;

app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});
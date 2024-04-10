const express = require('express');
const func = require('./util/funcaoOperador');
const app = express();

app.get('/', function(req, res) {
    res.send('Página Inicial');
})

app.get('/soma/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = func.somar(a, b);

    res.send(""+c);

});

app.get('/sub/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = func.sub(a, b);

    res.send(""+c);

});

app.get('/multi/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = func.multi(a, b);

    res.send(""+c);

});

app.get('/div/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = func.div(a, b);

    res.send(""+c);

});


const PORT = 8080;

app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});
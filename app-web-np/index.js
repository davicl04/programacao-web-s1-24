const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Página Inicial.');
});

app.get('/inicio/:nome', function(req, res){
    
    let n = req.params.none;
    res.send('Bem vindo: ', +n);
});

app.get('/verificar-numer-primo/:nome', function(req, res){
    
    let n = req.params.none;
    let ehPrimo = v
    res.send('Bem vindo: ', +n);
});

app.get('/documentos', function(req, res){
    res.send('Página Documentos.');
});

app.get('/longe', function(req, res){
    res.send('Página Longe.');
});

app.get('/longe/oi', function(x, y){
    res.send('Página Inicial.');
});


const PORT = 100;

app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});
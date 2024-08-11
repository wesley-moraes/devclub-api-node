import express from 'express';

const app = express();

//Todas reprecisam de:
//O tipo de rota/o método http(get, put, dete, etc...)
//E em seguida precisa do endereço.
//Resumidamente: 
//1 - Tipo de Rota/Método HTTP
//2 - Endereço.
app.get('/usuarios', (req, res) => {
     res.send("ok, deu bom");
});

app.listen(3000);
    
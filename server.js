import express from 'express';

const app = express();
app.use(express.json());
//Todas reprecisam de:
//O tipo de rota/o método http(get, put, dete, etc...)
//E em seguida precisa do endereço.
//Resumidamente: 
//1 - Tipo de Rota/Método HTTP
//2 - Endereço.

const users = [];

app.post('/usuarios', (req, res) => {
    //console.log(req.body);
    users.push(req.body);
    res.send('ok post');

})

app.get('/usuarios', (req, res) => {
     res.send(users);
});

app.listen(3000);
    
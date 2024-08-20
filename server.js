import express from 'express';
//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
//Todas reprecisam de:
//O tipo de rota/o método http(get, put, dete, etc...)
//E em seguida precisa do endereço.
//Resumidamente: 
//1 - Tipo de Rota/Método HTTP
//2 - Endereço.

//const users = [];

app.post('/usuarios', async (req, res) => {

    console.log('entrou aqui');
    /*
    console.log(req.body);
    users.push(req.body);
    res.send('ok post');
    res.status(201).json(users);
    */
    
    await prisma.user.create({
        data:{
            name: req.body.name,
            address: req.body.address,
            email: req.body.email
        }
    })

    res.status(201).json(req.body);
})/

app.put('/usuarios/:id', async (req, res) => {
    console.log('Entrou aqui yay')
    console.log(req);
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            name: req.body.name,
            address: req.body.address,
            email: req.body.email
        }
    })

    res.status(201).json(req.body);
})

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany();
     res.status(200).json(users);
});

app.delete('/usuarios/:id', async (req, res) =>{
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: "Usuário deletado com sucesso!"});
})

app.listen(3000);
    


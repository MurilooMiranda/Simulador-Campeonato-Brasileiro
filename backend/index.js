
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const dbConfig= {
    host: 'localhost',
    user: 'murilo',
    password: '3005',
    database: 'brasileirao_system'
};

app.get('/dados-campeonato', async(req, res)=>{
    try{
        const connection = await mysql.createConnection(dbConfig);
        
        const [times] = await connection.execute('SELECT * FROM times ORDER BY nome');
        const [partidas] = await connection.execute('SELECT * FROM partidas ORDER BY id');
    
        res.json({times, partidas});

    } catch(error){
        console.error('Erro ao buscar os dados', error);
        res.status(500).json({error:'Ocorreu um erro ao buscar os dados'});
    }
});

app.listen(port, () =>{
    console.log(`Servidor backend rodando em http://localhost:${port}`);

});
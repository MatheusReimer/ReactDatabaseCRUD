const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'react',
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors()); 


app.get('/api/get',(req,res)=>{
    const sqlSelect = "SELECT * FROM pessoa";
    db.query(sqlSelect,(err,result)=>{
        
        res.send(result);
    });
});

app.post('/api/insert',(req,res)=>{

    const nome = req.body.nome;
    const senha = req.body.senha;

    const sqlInsert = "INSERT INTO pessoa(nome,senha) VALUES (?,?)";
    db.query(sqlInsert,[nome,senha],(err,result)=>{
        console.log(result);
    })
});
 

app.listen(3001, ()=>{
    console.log('running on port 3001');
})
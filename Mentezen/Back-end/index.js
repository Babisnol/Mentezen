const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // ou o seu usuário do MySQL
  password: '',       // sua senha
  database: 'cadastro_site'
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).send({ mensagem: 'Preencha todos os campos.' });
  }

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  conexao.query(sql, [nome, email, senha], (err, resultado) => {
    if (err) {
      console.error('Erro ao cadastrar:', err);
      return res.status(500).send({ mensagem: 'Erro ao cadastrar usuário.' });
    }
    res.send({ mensagem: 'Usuário cadastrado com sucesso!' });
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

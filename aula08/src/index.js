const express = require("express");
const rotaProduto = require('./rotas/produto.rota')
const rotaUsuario = require('./rotas/usuario.rota')

const app = express();
app.use(express.json());

app.use('/static', express.static('public'))

app.use('/usuarios', rotaUsuario)
app.use('/produtos', rotaProduto)

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Express!" });
});

app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080");
});
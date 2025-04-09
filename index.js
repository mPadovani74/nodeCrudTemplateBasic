const express =  require("express");
const app = express();
const router = require("./routers/index");
const conexao = require("./banco/conexao");
const tabelas = require("/banco/tabelas")
router(app);

tabelas.init(conexao);

app.listen(3000, (error) => {
    if(error){
        console.log("Erro");
        return;
    }
    console.log("Sucesso");
})
const mysql = require("mysql");

const conexao = mysql.createConnection({
    host:"localhost",
    port: 3000,
    user: "seuUsername",
    password: "seuPwd",
    database: "seuBancoSql"
})

module.export = conexao;
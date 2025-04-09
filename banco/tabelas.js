class Tabelas {
    init(conexao){
        this.conexao = conexao;
    }

    criarTabelaAtendimentos() {
       //Construção da tabela;
       this.conexao.query(sql, (error) =>{
           if(error){
            console.log("Erro ao criar a tabela")
            console.log(error.message())
            return;
           }
           console.log("Tabela criada")
    })
}
}

module.exports = new tabelas();

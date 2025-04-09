class AtendimentoController {
    buscar() {
        return "Buscando"
    }
    criar(){
        return "Criando"
    }
    alterar(id){
        return "Alterando " + id
    }
    apagar(id){
        return "Deletando atendimento número " + id
    }
}

module.exports = new AtendimentoController();
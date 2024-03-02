const { listar, atualizar } = require("../../aulas/aula02/controlador");
const Contato = require("./Contato");
const contatos = []
function adicionarContato(nome,email,telefone){

    var novoContato = new Contato(nome,email,telefone)
    contatos.push(novoContato)
}
function listarContatos(){
    return contatos
}
function buscarContato(nome){
    var nome =  contatos.find(contato => contatos.nome ===nome)
    console.log(nome)
}
function atualizarContato(nome,email,telefone){
   const contato = buscarContato(nome)
   if(contato == true){
    contato.email = email
    contato.telefone = telefone
   }
}
function removerContato(nome){
    const posicao = contatos.findIndex(contato => contato.nome ===nome)
    if(posicao>0){
        contatos.splice(posicao,1)
    }else {
        console.log("Contato não encontrado")
    }
}
module.export = adicionarContato, listarContatos, removerContato, atualizarContato, buscarContato
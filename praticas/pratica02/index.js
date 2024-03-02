
const Contato = require("./Contato.js")
const readline = require("readline-sync")
const controlador= require("./controlador.js")

const nome = readline.question("Qual o seu nome: ");
const email = readline.question("Qual o seu e-mail: ");
const telefone = readline.question("Qual é o seu telefone:");
function menu() {
    console.log('1. Listar');
    console.log("2. Adicionar")
    console.log('3. Buscar');
    console.log('4. Atualizar');
    console.log('5. Remover');
    console.log('6. Sair');
  } function escolherOpcao(opcao){
    switch(opcao) {
        case '1': controlador.listarContatos();
        const contatos = controlador. break;
        case '2': controlador.adicionarContato(); break;
        case '3': controlador.buscarContato(); break;
        case '4': controlador.atualizarContato();break;
        case '5': controlador.removerContato();break;
        case '6': controlador.process.exit(0);
        default: console.log("Opcao invalida");  
      }
  }

module.export = nome, email, telefone
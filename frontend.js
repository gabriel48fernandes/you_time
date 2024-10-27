const prompt = require("prompt-sync")();
const backend = require('./backend.js');
let opçoes = "";

function menuAdministrativo() {
    console.log("---MENU---");
    console.log("");
    console.log("1- serviços cadastrados ");
    console.log("2- minha agenda ");
    console.log("3- meus clientes ");
    console.log("4- cadastrar novo serviço/editar serviço já cadastrado ");
    console.log("5- cadastrar cliente ");
    console.log("6- pesquisar cliente ");
    console.log("7- sair ");

    opçoes = prompt("Digite a opção desejada: ");
    
    switch(opçoes) {
        case "1":
            backend.mostrarDados();
            break;
        case "2":
            // Lógica para minha agenda
            break;
        case "3":
            backend.meusClientes();
            break;
        case "4":
            let cod = parseInt(prompt("Digite um código para esse novo serviço: "));
            let serviço = prompt("Digite o serviço: ");
            let valor = parseFloat(prompt("Digite o valor: "));
            backend.inserirDados(cod, serviço, valor);
            console.log(serviço, "R$", valor, " foi cadastrado com sucesso");
            backend.mostrarDados();
            break;
        case "5":
            let codigo = parseInt(prompt("Digite um novo código para esse cliente: "));
            let cliente = prompt("Digite o nome do cliente novo: ");
            let numero = parseInt(prompt("Digite o número de telefone do cliente: "));
            backend.cadastrarCliente(codigo, cliente, numero);
            break;
        case "6":
            let valorPesquisa = prompt("Digite o nome ou o código do cliente que deseja encontrar: ");
            let resultadoPesquisa = backend.pesquisarCliente(valorPesquisa);
            console.log(resultadoPesquisa);
            break;
        case "7":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

while (opçoes !== "7") {
    menuAdministrativo();
}

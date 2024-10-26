const prompt=require("prompt-sync")()
const backend= require('./backend.js')
let opçoes= ""
function menuAdministrativo(){
    
    console.log ("---MENU---")
    console.log ("")
    console.log ("1- serviços cadastrados ")
    console.log ("2- minha agênda ")
    console.log ("3- meus clientes ")
    console.log ("4- cadastrar novo serviço/editar serviço já cadrastrado ")
    console.log ("5- cadastrar cliente ")
    console.log ("6- pesquisar cliente ")
    console.log ("7- sair ")

 opçoes=prompt("digite a opçao desejada")
switch(opçoes){
    case "1":
        backend.mostrarDados()
        break
    case "2":

        break
    case "3":
        backend.meusClientes()
        break
    case "4":
        let cod =parseInt(prompt("digite um codigo para esse novo serviço "))
        let serviço =prompt("digite o serviço ")
        let valor =parseInt(prompt("digite o valor "))
        backend.inserirDados(cod,serviço,valor)
        console.log (serviço,"R$",valor, "cadastrado")
        backend.mostrarDados()
        break
    case "5":
        let codigo= parseInt(prompt("digite um novo codigo para esse cliente"))
        let cliente= prompt("digite o nome do cliente novo")
        let numero=parseInt(prompt("digite o numero de telefone do cliente"))
        backend.cadastrarCliente(codigo,cliente,numero)
      
        break
    case "6":
        clientes= prompt("digite o nome ou o codigo que deseja encontrar ")
        backend.pesquisarCliente(clientes)
        backend.clienteCod(clientes)
        console.log()
        break
    case "7":
        console.log("saindo..")
        //break
    default:
}
}


while (opçoes!=="7"){
   menuAdministrativo() 
}


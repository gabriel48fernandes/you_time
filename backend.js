   //tipos de cortes
let serviços =
[    
    {cod: 1, corte: "corte basico & barba (sem degrade)", valor: 45.00},
    {cod: 2, corte: "corte basico, barba+sombrancelha", valor: 50.00},
    {cod: 3, corte: "corte na 0/1 & barba", valor: 50.00 },
    {cod: 4, corte: "corte degrade & barba + sombrancelha", valor: 55.00},
    {cod: 5, corte: "corte degrade na shaver & barba", valor: 50.00}
     
]
let clientes=
[
    {cod:1, cliente:"Gabiel fernandes", numero: 997931896},
    {cod:2, cliente: "Douglas israel", numero: 980459975},
    {cod:3, cliente: "Murilo motta", numero: 994154159},
    {cod:4, cliente: "Miguel", numero: 997889271}
]
function cadastrarCliente(pcodigo,pcliente,pnumero){
    clientes.push({cod:pcodigo,cliente:pcliente, numero:pnumero})
}
function meusClientes(){
    console.table(clientes)
}
function mostrarDados (){
    console.table(serviços)
}
function inserirDados(pcorte,pvalor){
    serviços.push({corte:pcorte,valor:pvalor})
}
// Função para pesquisar cliente
function pesquisarCliente(nome){
    
    for(let i = 0; i < clientes.length; i++){
  
      if(clientes[i].cliente == nome){
        console.log("Cliente encontrado: " + clientes[i].cliente + " - " + clientes[i].numero)
        return 
      }
    }
    console.log("Cliente não encontrado.");
  }
  function clienteCod(cod){
  
    for(let i = 0; i < clientes.length; i++){
  
      if(clientes[i].cod == parseInt(cod)){
    console.log("Cliente encontrado: " + clientes[i].cod + " - " +clientes[i].cliente, clientes[i].numero)

        return
      }
    }
    console.log("Cliente não encontrado.");
  }
 module.exports= {mostrarDados,clienteCod,pesquisarCliente,inserirDados,cadastrarCliente,meusClientes}
 
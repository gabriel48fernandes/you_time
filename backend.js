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
function cadastrarCliente(pcodigo, pcliente, pnumero) {
    let teste2 = clienteCod(pcodigo);
    
    // Verifica se o código já existe
    if (teste2 === -1) {
        clientes.push({ cod: pcodigo, cliente: pcliente, numero: pnumero });
        console.log(pcliente," cadastrado com sucesso!");
    } else {
        console.log("Erro: Código de cliente já existe.");
    }
}

function meusClientes(){
    console.table(clientes)
}
function mostrarDados (){
    console.table(serviços)
}
function inserirDados(pcodigo,pcorte,pvalor){
 
  let test2= clienteCod(pcodigo)
    serviços.push({cod:pcodigo,corte:pcorte,valor:pvalor})
}
// Função para pesquisar cliente
function pesquisarCliente(nome){
    
    for(let i = 0; i < clientes.length; i++){
  
      if(clientes[i].cliente == nome){
        let retornoEncontrar="Cliente encontrado: " + clientes[i].cliente + " - " + clientes[i].numero
        return retornoEncontrar  
      }
    }
    
    return "Cliente não encontrado."
  }
  function clienteCod(cod){
  
    for(let i = 0; i < clientes.length; i++){
  
      if(clientes[i].cod == parseInt(cod)){
    //let retorno= "Cliente encontrado: " + clientes[i].cod + " - " +clientes[i].cliente+ clientes[i].numero

        return i
      }
    }
    return -1
  }
 module.exports= {mostrarDados,clienteCod,pesquisarCliente,inserirDados,cadastrarCliente,meusClientes}
 
const prompt = require("prompt-sync")()
const { Pool } = require('pg');
// Configuração do banco de dados
const pool = new Pool({
    user: 'postgres',       // Substitua pelo seu usuário
    host: 'localhost',         // Host do PostgreSQL
    database: 'you_time',   // Nome do banco de dados
    password: '1234',     // Substitua pela sua senha
    port: 5432                 // Porta do PostgreSQL
  });
let menu = ""
async function menuCliente(){
  console.log("------menu------")
  console.log(" 1. Mostrar clientes")
  console.log(" 2. Pesquisar cliente")
  console.log(" 3. Adicionar cliente")
  console.log(" 4. exclir cliente")
  console.log(" 5. atualizar cliente")
  console.log(" 6. sair ")
  menu= prompt(" digite a opção")

switch (menu) {
  case "1":
    await mostrarClientes()
    menuCliente()
    break
  
  case "2":
    await pesquisarClientes()
    menuCliente()
    break

  case "3":
    await cadastrarCliente()
    menuCliente()
    break

  case "4":
    await excluirCliente()
    menuCliente()
    break

  case "5":
    await atualizarCliente()
    menuCliente()
    break

  case "6":
    console.log("saindo...")
    break
    default:
}
}

 menuCliente()

 
async function mostrarClientes() {
    try{
  
      const query = 'SELECT * FROM you_time.cliente'
      const result = await pool.query(query);
      console.table(result.rows)
    }
    catch{
      console.log("Erro")
    }
  }
 //mostrarClientes()

  async function pesquisarClientes() {
    let nomeCliente = prompt("Digite o nome do cliente: ")
    nomeCliente= "%" + nomeCliente+ "%" 
    
    try {
      const { rows } = await pool.query('SELECT nome, cod  FROM you_time.cliente WHERE nome ILIKE $1 LIMIT 1', [nomeCliente])
  
      if (!rows.length) {
        console.log("cliente não encontrado.")
      } else {
        console.log('cliente encontrado: cod: ' + rows[0].cod  )
        console.log("cliente : " , rows[0].nome )
        return rows[0].cod
      }
    } catch (error) {
      console.log("Erro ao buscar o cliente.", error)
    }
  }
//pesquisarClientes()

async function cadastrarCliente (){
  try {
     const nome = prompt("digite o nome do cliente")
     const numeroTelefone = prompt("digite o telefone do cliente")
     const cod = prompt("digite o codigo do cliente")
     const query = 'INSERT INTO you_time.cliente (nome, numero, cod) VALUES ($1, $2, $3)';
     await  pool.query(query, [nome, numeroTelefone, cod]);
     console.log("cliente cadastrado com sucesso!");
  } catch (error){
     console.error('erro ao cadastrar cliente:' , error)
 
  }

 }
 //cadastrarCliente()

 async function excluirCliente() {
  try {
    const codCliente = await pesquisarClientes(); 
    if (!codCliente) {
      console.log("Nenhum cliente encontrado para excluir.");
      return;
    }

    await pool.query('DELETE FROM you_time.cliente WHERE cod = $1', [codCliente]);
    console.log('Cliente excluído com sucesso! Cod:', codCliente);
  } catch (error) {
    console.log("Erro ao excluir cliente:", error);
  }
}


//excluirCliente()


async function atualizarCliente() {
  
  try{     
  const idcliente = await pesquisarClientes()
  const newnumero= prompt("digite o novo numero")
  const query= 'update you_time.cliente set numero = $2 where cod "= $1'
  await pool.query (query,[idcliente, newnumero])
  console.log(" numero atualizado para : " , newnumero)
  }
  catch (error){
    console.log ("deu algo errado ", error)
  }
}
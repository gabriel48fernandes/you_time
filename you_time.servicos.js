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

  async function mostrarServicos() {
    try{
  
      const query = 'SELECT * FROM you_time.servicos'
      const result = await pool.query(query);
      console.table(result.rows)
    }
    catch{
      console.log("Erro")
    }
  }
 //mostrarServicos()

 async function pesquisarServicos() {
    let nomeServico = prompt("Digite o nome do serviço : ")
    nomeServico= "%" + nomeServico+ "%" 
    
    try {
      const { rows } = await pool.query('SELECT cortes, cod  FROM you_time.servicos WHERE cortes ILIKE $1 LIMIT 1', [nomeServico])
  
      if (!rows.length) {
        console.log("serviço não encontrado.")
      } else {
        console.log(' serviço encontrado: cod: ' + rows[0].cod  )
        console.log("serviço : " , rows[0].cortes )
        return rows[0].cod
      }
    } catch (error) {
      console.log("Erro ao buscar serviço.", error)
    }
  }
  //pesquisarServicos()

  async function cadastrarServicos (){
    try { 
       const servico = prompt(" digite o novo serviço que deseja cadastrar")
       const valor = prompt("digite o valor do novo serviço ")
       const cod = prompt("digite o codigo do serviço ")
       const query = 'INSERT INTO you_time.servicos (cortes, valor, cod) VALUES ($1, $2, $3)';
       await  pool.query(query, [servico, valor, cod]);
       console.log("serviço cadastrado com sucesso!");
    } catch (error){
       console.error('erro ao cadastrar serviço:' , error)
   
    }
  
   }
  cadastrarServicos()


  async function excluirServico() {
    try {
      const codServico = await pesquisarServicos(); 
      if (!codServico) {
        console.log("Nenhum serviço encontrado para excluir.");
        return;
      }
  
      await pool.query('DELETE FROM you_time.servicos WHERE cod = $1', [codServico]);
      console.log('Serviço excluído com sucesso! Cod:', codServico);
    } catch (error) {
      console.log("Erro ao excluir serviço:", error);
    }
  }
  
  
  //excluirServico()
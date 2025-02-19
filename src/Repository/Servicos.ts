import { Pool } from "pg";
import { Database } from "./DataBase";
import { Servicos } from "../Entity/Servicos";

    export class ClienteServicos {
        private pool : Pool ;
    
        constructor(){
            this.pool = Database.iniciarConexao();
        }
     
        async listarServicos():Promise<Servicos[]>{
     
            const query = "SELECT * FROM you_time.servicos";
            const result =  await this.pool.query(query);
     
            const listaServico: Servicos[] = [];
           
            for(const row of result.rows){
                const cliente = new Servicos(row.cortes, row.valor);
                listaServico.push(cliente);
               
            }
           
           
            return listaServico;
        }
    
    
    
    }
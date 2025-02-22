import { Pool } from "pg";
import { Database } from "./Database";
import { Servicos } from "../entity/servicos";

    export class ServicosRepository {
        private pool : Pool ;
    
        constructor(){
            this.pool = Database.iniciarConexao();
        }
     
        async listarServicos(): Promise<Servicos[]> {
            const query = "SELECT * FROM you_time.servicos";
            const result = await this.pool.query(query);
    
            const listaServicos: Servicos[] = [];
            
            for (const row of result.rows) {
                const servico = new Servicos(row.cod, row.cortes, row.valor);
                listaServicos.push(servico);
            }
            
            return listaServicos;
        }
    
        async adicionarServico(cortes: string, valor: number): Promise<void> {
            const query = "INSERT INTO you_time.servicos (cortes, valor) VALUES ($1, $2)";
            await this.pool.query(query, [cortes, valor]);
        }
    
        async excluirServico(cod: number): Promise<void> {
            const query = "DELETE FROM you_time.servicos WHERE cod = $1";
            await this.pool.query(query, [cod]);
        }
    }
    
    
    

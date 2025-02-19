import { Pool } from "pg";
import { Database } from "./DataBase";
import { Cliente } from "../Entity/Clientes";

export class ClienteServicos {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarClientes(): Promise<Cliente[]> {
        const query = "SELECT * FROM you_time.cliente";
        const result = await this.pool.query(query);

        const listaClientes: Cliente[] = [];
        
        for (const row of result.rows) {
            const cliente = new Cliente(row.cod, row.nome, row.numero);
            listaClientes.push(cliente);
        }
        
        return listaClientes;
    }
}
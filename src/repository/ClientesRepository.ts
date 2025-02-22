import { Pool } from "pg";
import { Cliente } from "../entity/Clientesl";
import { Database } from "./Database";

export class ClienteRepository {
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

    async buscarCliente(cod: number): Promise<Cliente | null> {
        const query = "SELECT * FROM you_time.cliente WHERE cod = $1";
        const result = await this.pool.query(query, [cod]);

        if (result.rows.length > 0) {
            const row = result.rows[0];
            return new Cliente(row.cod, row.nome, row.numero);
        }
        return null;
    }

    async adicionarCliente(nome: string, numero: string): Promise<void> {
        const query = "INSERT INTO you_time.cliente (nome, numero) VALUES ($1, $2)";
        await this.pool.query(query, [nome, numero]);
    }

    async excluirCliente(cod: number): Promise<void> {
        const query = "DELETE FROM you_time.cliente WHERE cod = $1";
        await this.pool.query(query, [cod]);
    }
}
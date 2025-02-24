import { Pool } from 'pg';
import { Cliente } from '../entity/Clientesl';
import { Database } from './Database';

export class ClienteRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarClientes(): Promise<Cliente[]> {
        const query = "SELECT * FROM you_time.cliente";
        const result = await this.pool.query(query);
        return result.rows.map(row => new Cliente(row.cod, row.nome, row.numero));
    }

    async buscarCliente(cod: number): Promise<Cliente | null> {
        const query = "SELECT * FROM you_time.cliente WHERE cod = $1";
        const result = await this.pool.query(query, [cod]);
        return result.rows.length > 0 ? new Cliente(result.rows[0].cod, result.rows[0].nome, result.rows[0].numero) : null;
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
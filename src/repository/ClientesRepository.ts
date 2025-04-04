import { Pool } from 'pg';
import { Cliente } from '../entity/Clientesl';
import { Database } from './Database';
import {interfaceRepository } from './interfaceRepository';

export class ClienteRepository implements interfaceRepository<Cliente>{
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarClientes(): Promise<Cliente[]> {
        const query = "SELECT * FROM you_time.cliente";
        const result = await this.pool.query(query);
        return result.rows.map(row => new Cliente(row.cod, row.nome, row.numero));
    }
    async buscarClientePorNumero(numero:string): Promise<Cliente> {
        const query = "SELECT * FROM you_time.cliente WHERE numero = $1";
        const result = await this.pool.query(query, [numero]);
        return new Cliente(result.rows[0].cod, result.rows[0].nome, result.rows[0].numero)
    }

    async buscarClientePorID(cod: number): Promise<Cliente> {
        const query = "SELECT * FROM you_time.cliente WHERE cod = $1";
        const result = await this.pool.query(query, [cod]);
        return new Cliente(result.rows[0].cod, result.rows[0].nome, result.rows[0].numero)
    }

    async adicionarCliente(nome: string, numero: string): Promise<void> {
        const query = "INSERT INTO you_time.cliente (nome, numero) VALUES ($1, $2)";
        await this.pool.query(query, [nome, numero]);
    }

    async excluirCliente(cod: number): Promise<void> {
        const query = "DELETE FROM you_time.cliente WHERE cod = $1";
        await this.pool.query(query, [cod]);
    }
    async atualizarPorID(item: Cliente): Promise<void> {
    
    
        const query = "UPDATE you_time.cliente SET nome = $1, numero = $2 WHERE cod = $3";
        await this.pool.query(query, [item.nome, item.numero, item.cod]);
        
    
    }}
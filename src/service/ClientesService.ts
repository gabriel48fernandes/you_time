import { Cliente } from "../entity/Clientesl";
import { ClienteRepository } from "../repository/ClientesRepository";

export class ClienteService {
    private repo: ClienteRepository;

    constructor() {
        this.repo = new ClienteRepository();
    }

    async listarClientes(): Promise<Cliente[]> {
        return await this.repo.listarClientes();
    }

    async buscarCliente(cod: number): Promise<Cliente | null> {
        return await this.repo.buscarCliente(cod);
    }

    async adicionarCliente(nome: string, numero: string): Promise<void> {
        await this.repo.adicionarCliente(nome, numero);
    }

    async excluirCliente(cod: number): Promise<void> {
        await this.repo.excluirCliente(cod);
    }
}
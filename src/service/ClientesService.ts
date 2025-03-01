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

    async buscarCliente(cod: number): Promise<Cliente> {
        return await this.repo.buscarCliente(cod);
    }

    async adicionarCliente(nome: string, numero: string): Promise<void> {
        await this.repo.adicionarCliente(nome, numero);
    }

    async excluirCliente(cod: number): Promise<void> {
        await this.repo.excluirCliente(cod);
    }

    async atualizarCliente(cod: number, novoNome: string, novoNumero: string): Promise<void> {


        let cliente = await this.buscarCliente(cod);

        if (cliente) {
            console.log(" Cliente encontrado: Nome: " + cliente.nome + "Número:" + cliente.numero);


            // Atualiza os campos do objeto cliente somente se o usuário digitar algo
            cliente.nome = novoNome || cliente.nome;
            cliente.numero = novoNumero || cliente.numero;

            // Atualiza o cliente chamando o método do service (reutilizando o fluxo existente)
            await this.repo.atualizarPorID(cliente);
            console.log("Cliente atualizado com sucesso!");
        } else {
            console.log("Cliente não encontrado.");
        }
    }

}

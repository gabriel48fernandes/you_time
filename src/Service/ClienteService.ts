import { Cliente } from "../Entity/Clientes";
import { ClienteServicos } from "../Repository/ClienteRepository";

export class ClienteService {
    private repo: ClienteServicos;

    constructor() {
        this.repo = new ClienteServicos();
    }

    async listarClientes(): Promise<Cliente[]> {
        return await this.repo.listarClientes();
    }
}

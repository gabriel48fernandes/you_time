import { Servicos } from "../entity/Servicos";
import { ServicosRepository } from "../repository/ServicosRepository";

export class ServicosService {
    private repo: ServicosRepository;

    constructor() {
        this.repo = new ServicosRepository();
    }

    async listarServicos(): Promise<Servicos[]> {
        return await this.repo.listarServicos();
    }

    async adicionarServico(cortes: string, valor: number): Promise<void> {
        await this.repo.adicionarServico(cortes, valor);
    }

    async excluirServico(cod: number): Promise<void> {
        await this.repo.excluirServico(cod);
    }
}
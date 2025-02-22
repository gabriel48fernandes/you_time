import { Horarios } from "../entity/horarios";
import { HorariosRepository } from "../repository/HorariosRepository";


export class HorariosService {
    private repo: HorariosRepository;

    constructor() {
        this.repo = new HorariosRepository();
    }

    async listarHorarios(): Promise<Horarios[]> {
        return await this.repo.listarHorarios();
    }

    async adicionarHorario(diaSemana: string, horario: string): Promise<void> {
        await this.repo.adicionarHorario(diaSemana, horario);
    }

    async excluirHorario(id: number): Promise<void> {
        await this.repo.excluirHorario(id);
    }
}

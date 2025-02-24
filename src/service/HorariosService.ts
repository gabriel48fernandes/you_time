import { Horarios } from "../entity/horarios";
import { HorariosRepository } from "../repository/HorariosRepository";

export class HorariosService {
    private repo: HorariosRepository;

    constructor() {
        this.repo = new HorariosRepository();
    }

    async listarHorariosDisponiveis(diaSemana: string): Promise<Horarios[]> {
        return await this.repo.listarHorariosDisponiveis(diaSemana);
    }

    async verificarHorarioDisponivel(horarioId: number): Promise<boolean> {
        return await this.repo.verificarHorarioDisponivel(horarioId);
    }

    async marcarHorarioIndisponivel(horarioId: number): Promise<void> {
        await this.repo.marcarHorarioIndisponivel(horarioId);
    }
}
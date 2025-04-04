// src/service/AgendaDisponivelService.ts
import { AgendaDisponivelRepository } from '../repository/AgendaDisponivelRepository';

export class AgendaDisponivelService {
    private agendaDisponivelRepository: AgendaDisponivelRepository;

    constructor() {
        this.agendaDisponivelRepository = new AgendaDisponivelRepository();
    }

    async verificarHorarioDisponivel(id: number): Promise<boolean> {
        return await this.agendaDisponivelRepository.verificarHorarioDisponivel(id);
    }

    async listarHorariosDisponiveis() {
        return await this.agendaDisponivelRepository.listarHorariosDisponiveis();
    }

    async restaurarHorario(id: number): Promise<void> {
        await this.agendaDisponivelRepository.restaurarHorario(id);
    }

    async reservarHorario(id: number): Promise<void> {
        await this.agendaDisponivelRepository.reservarHorario(id);
    }
    async inserirProximosDias(): Promise<void> {
        await this.agendaDisponivelRepository.inserirProximosDias()
    }

}


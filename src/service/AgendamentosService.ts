import { AgendamentosRepository } from '../repository/AgendamentosRepository';
import { ClienteService } from './ClientesService';
import { ServicosService } from './ServicosService';
import { HorariosService } from './HorariosService';

export class AgendamentosService {
    private agendamentosRepository: AgendamentosRepository;
    private clienteService: ClienteService;
    private servicosService: ServicosService;
    private horariosService: HorariosService;

    constructor() {
        this.agendamentosRepository = new AgendamentosRepository();
        this.clienteService = new ClienteService();
        this.servicosService = new ServicosService();
        this.horariosService = new HorariosService();
    }

    async listarAgendamentos() {
        return await this.agendamentosRepository.listarAgendamentos();
    }

    async verificarDisponibilidade(horarioId: number): Promise<boolean> {
        return await this.agendamentosRepository.verificarHorarioDisponivel(horarioId);
    }

    async agendarServico(clienteId: number, servicoId: number, data: string, horarioId: number): Promise<void> {
        const horarioDisponivel = await this.horariosService.verificarHorarioDisponivel(horarioId);
        if (!horarioDisponivel) {
            throw new Error('Horário indisponível!');
        }
        await this.agendamentosRepository.adicionarAgendamento(clienteId, servicoId, data, horarioId);
    }
}
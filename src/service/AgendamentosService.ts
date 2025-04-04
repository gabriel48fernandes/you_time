// src/service/AgendamentosService.ts
import { AgendaDisponivelService } from './AgendaDisponivelService';
import { AgendamentosRepository } from '../repository/AgendamentosRepository';
import { ClienteService } from './ClientesService';
import { ServicosService } from './ServicosService';

export class AgendamentosService {

    private agendamentosRepository: AgendamentosRepository;
    private clienteService: ClienteService;
    private servicosService: ServicosService;
    private agendaDisponivelService: AgendaDisponivelService;

    constructor() {
        this.agendamentosRepository = new AgendamentosRepository();
        this.clienteService = new ClienteService();
        this.servicosService = new ServicosService();
        this.agendaDisponivelService = new AgendaDisponivelService();
    }

    async listarAgendamentos() {
        return await this.agendamentosRepository.listarAgendamentos();
    }

    async verificarDisponibilidade(agendaDisponivel: number): Promise<boolean> {
        return await this.agendaDisponivelService.verificarHorarioDisponivel(agendaDisponivel);
    }
    async excluirAgendamento(cod: number): Promise<void> {
        // Buscar o agendamento antes de excluir para recuperar o ID do horário
        const agendamento = await this.agendamentosRepository.buscarAgendamentoPorId(cod);
    
        if (!agendamento) {
            throw new Error("Agendamento não encontrado!");
        }
    
        // Excluir o agendamento
        await this.agendamentosRepository.excluirAgendamento(cod);
    
        // Restaurar a disponibilidade do horário associado ao agendamento
        await this.agendaDisponivelService.restaurarHorario(agendamento.id_agenda_disponivel);
    }
    

    async agendarServico(clienteId: number, servicoId: number, agendaDisponivel: number): Promise<void> {
        // Verificar se o horário está disponível antes de adicionar o agendamento
        const horarioDisponivel = await this.verificarDisponibilidade(agendaDisponivel);
        if (!horarioDisponivel) {
            throw new Error('Horário indisponível!');
        }
        
        // Adiciona o agendamento
        await this.agendamentosRepository.adicionarAgendamento(clienteId, servicoId, agendaDisponivel);

        // Reservar o horário após o agendamento
        await this.agendaDisponivelService.reservarHorario(agendaDisponivel);
    }
}

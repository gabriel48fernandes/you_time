import { AgendamentosService } from '../service/AgendamentosService';
import { ClienteService } from '../service/ClientesService';
import { HorariosService } from '../service/HorariosService';
import { ServicosService } from '../service/ServicosService';
import promptSync from 'prompt-sync';

export class AgendamentosView {
    private agendamentosService: AgendamentosService;
    private clienteService: ClienteService;
    private servicosService: ServicosService;
    private horariosService: HorariosService;
    private prompt: promptSync.Prompt;

    // Dias da semana disponíveis
    private diasDisponiveis = [
        { id: 1, dia: "Terça-feira" },
        { id: 2, dia: "Quarta-feira" },
        { id: 3, dia: "Quinta-feira" },
        { id: 4, dia: "Sexta-feira" },
        { id: 5, dia: "Sábado" }
    ];

    constructor() {
        this.agendamentosService = new AgendamentosService();
        this.clienteService = new ClienteService();
        this.servicosService = new ServicosService();
        this.horariosService = new HorariosService();
        this.prompt = promptSync();
    }

    async exibirAgendamentos() {
        try {
            const agendamentos = await this.agendamentosService.listarAgendamentos();
            console.table(agendamentos);
        } catch (error) {
            console.error('Erro ao listar agendamentos:', error);
        }
    }

    async agendarServico() {
        try {
            // Listar clientes
            const clientes = await this.clienteService.listarClientes();
            console.table(clientes);
            const clienteId = parseInt(this.prompt("Digite o ID do cliente: "));

            // Listar serviços
            const servicos = await this.servicosService.listarServicos();
            console.table(servicos);
            const servicoId = parseInt(this.prompt("Digite o ID do serviço: "));

            // Exibir dias disponíveis
            console.log("\nDias disponíveis:");
            console.table(this.diasDisponiveis);
            const diaId = parseInt(this.prompt("Digite o ID do dia: "));
            const diaEscolhido = this.diasDisponiveis.find(dia => dia.id === diaId);

            if (!diaEscolhido) {
                throw new Error("ID do dia inválido!");
            }

            // Listar horários disponíveis para o dia escolhido
            const horariosDisponiveis = await this.horariosService.listarHorariosDisponiveis(diaEscolhido.dia);
            console.table(horariosDisponiveis);

            if (horariosDisponiveis.length === 0) {
                console.log("Não há horários disponíveis para este dia.");
                return;
            }

            const horarioId = parseInt(this.prompt("Digite o ID do horário: "));

            // Confirmar agendamento
            const data = this.prompt("Digite a data (YYYY-MM-DD): ");
            await this.agendamentosService.agendarServico(clienteId, servicoId, data, horarioId);
            console.log('Agendamento realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao realizar o agendamento:', error.message);
        }
    }
}
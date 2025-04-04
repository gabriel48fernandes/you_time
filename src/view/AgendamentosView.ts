import { AgendaDisponivelService } from '../service/AgendaDisponivelService';
import { AgendamentosService } from '../service/AgendamentosService';
import { ClienteService } from '../service/ClientesService';
import { ServicosService } from '../service/ServicosService';

import promptSync from 'prompt-sync';

export class AgendamentosView {
    private agendamentosService: AgendamentosService;
    private clienteService: ClienteService;
    private servicosService: ServicosService;
    private agendaDisponivelService: AgendaDisponivelService;
    private prompt: promptSync.Prompt;

    constructor() {
        this.agendamentosService = new AgendamentosService();
        this.clienteService = new ClienteService();
        this.servicosService = new ServicosService();
        this.agendaDisponivelService = new AgendaDisponivelService();
        this.prompt = promptSync();
    }

    async exibirMenu(): Promise<void> {
        let continuar = true;

        while (continuar) {
            console.log("\n------ MENU DE HORÁRIOS ------");
            console.log(" 1. Listar agendamentos ");
            console.log(" 2. Criar agendamento ");
            console.log(" 3. Deletar agendamento ");
            console.log(" 4. Sair");

            let menu = this.prompt("Digite a opção: ");

            switch (menu) {
                case "1":
                    console.table(await this.agendamentosService.listarAgendamentos());
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;
                
                case "2":
                    try {
                        // Listar clientes
                        const clientes = await this.clienteService.listarClientes();
                        console.table(clientes);
                        const clienteId = parseInt(this.prompt("Digite o ID do cliente: "));
            
                        // Listar serviços
                        const servicos = await this.servicosService.listarServicos();
                        console.table(servicos);
                        const servicoId = parseInt(this.prompt("Digite o ID do serviço: "));
            
                        // Listar horários disponíveis
                        const horariosDisponiveis = await this.agendaDisponivelService.listarHorariosDisponiveis();
                        console.table(horariosDisponiveis);
                        const agendaDisponivel = parseInt(this.prompt("Digite o ID do horário desejado: "));
            
                        // Confirmar agendamento
                        await this.agendamentosService.agendarServico(clienteId, servicoId, agendaDisponivel);
                        console.log('Agendamento realizado com sucesso!');
                    } catch (error) {
                        console.error('Erro ao realizar o agendamento:', error);
                    }
                    break;

                case "3":
                    console.table(await this.agendamentosService.listarAgendamentos())
                    let remover = parseInt(this.prompt("Digite o ID do agendamento que deseja excluir: "));
                    await this.agendamentosService.excluirAgendamento(remover);
                    console.log("Cliente removido com sucesso!");
                    console.table(await this.agendamentosService.listarAgendamentos());
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "4":
                    console.log("Saindo do menu de agendamentos...");
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}

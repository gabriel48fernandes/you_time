import { AgendaDisponivelService } from "../service/AgendaDisponivelService";
import promptSync from 'prompt-sync';

export class AgendaDisponivelView {
    private agendaDisponivelService: AgendaDisponivelService;
    private prompt: promptSync.Prompt;

    constructor() {
        this.agendaDisponivelService = new AgendaDisponivelService();
        this.prompt = promptSync();
    }

    async exibirMenu(): Promise<void> {
        let continuar = true;

        while (continuar) {
            console.log("\n------ MENU DE HORÁRIOS DISPONÍVEIS ------");
            console.log("1. Listar horários disponíveis");
            console.log("2. Atualizar próximos 5 dias disponíveis");
            console.log("3. Sair");

            const opcao = this.prompt("Digite a opção desejada: ");

            switch (opcao) {
                case "1":
                    const horarios = await this.agendaDisponivelService.listarHorariosDisponiveis();
                    console.table(horarios);
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "2":
                    await this.agendaDisponivelService.inserirProximosDias();
                    console.log("Horários atualizados para os próximos 5 dias úteis.");
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;
                case "3":
                    console.log("Saindo do menu Agenda...");
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}

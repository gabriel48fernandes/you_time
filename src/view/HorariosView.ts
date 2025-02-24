import { HorariosService } from "../service/HorariosService";
import promptSync from 'prompt-sync';

export class HorariosView {
    private horariosService: HorariosService;
    private prompt: promptSync.Prompt;

    constructor() {
        this.horariosService = new HorariosService();
        this.prompt = promptSync();
    }

    async exibirMenu(): Promise<void> {
        let continuar = true;

        while (continuar) {
            console.log("\n------ MENU DE HORÁRIOS ------");
            console.log(" 1. Listar horários disponíveis");
            console.log(" 2. Verificar disponibilidade de horário");
            console.log(" 3. Sair");

            let menu = this.prompt("Digite a opção: ");

            switch (menu) {
                case "1":
                    const diaSemana = this.prompt("Digite o dia da semana: ");
                    const horarios = await this.horariosService.listarHorariosDisponiveis(diaSemana);
                    console.table(horarios);
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "2":
                    const horarioId = parseInt(this.prompt("Digite o ID do horário: "));
                    const disponivel = await this.horariosService.verificarHorarioDisponivel(horarioId);
                    console.log(disponivel ? "Horário disponível!" : "Horário indisponível!");
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "3":
                    console.log("Saindo do menu de horários...");
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}
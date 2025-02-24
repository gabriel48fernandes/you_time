import promptSync from 'prompt-sync';
import { ServicosService } from '../service/ServicosService';

export class ServicosView {
    public servicosServico: ServicosService;
    private prompt: promptSync.Prompt;

    constructor() {
        this.servicosServico = new ServicosService();
        this.prompt = promptSync();
    }

    async exibirMenu(): Promise<void> {
        let continuar = true;

        while (continuar) {
            console.log("\n------ MENU DE SERVIÇOS ------");
            console.log(" 1. Listar serviços");
            console.log(" 2. Adicionar serviço");
            console.log(" 3. Excluir serviço");
            console.log(" 4. Sair ");

            let menu = this.prompt("Digite a opção: ");

            switch (menu) {
                case "1":
                    console.table(await this.servicosServico.listarServicos());
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "2":
                    let cortes = this.prompt("Digite o nome do serviço (ex: corte, barba, etc.): ");
                    let valor = parseFloat(this.prompt("Digite o valor do serviço: "));
                    if (isNaN(valor)) {
                        console.log("Valor inválido! Tente novamente.");
                    } else {
                        await this.servicosServico.adicionarServico(cortes, valor);
                        console.log("Serviço adicionado com sucesso!");
                    }
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "3":
                    console.table(await this.servicosServico.listarServicos());
                    let cod = parseInt(this.prompt("Digite o código do serviço que deseja excluir: "));
                    if (isNaN(cod)) {
                        console.log("Código inválido! Tente novamente.");
                    } else {
                        await this.servicosServico.excluirServico(cod);
                        console.log("Serviço excluído com sucesso!");
                    }
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "4":
                    console.log("Saindo do menu de serviços...");
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}
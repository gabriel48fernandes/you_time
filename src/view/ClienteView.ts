import promptSync from "prompt-sync";
import { ClienteService } from "../service/ClientesService";

export class ClienteView {
    public clienteservico: ClienteService;
    private prompt: promptSync.Prompt;

    constructor() {
        this.clienteservico = new ClienteService();
        this.prompt = promptSync();
    }

    async exibirMenu(): Promise<void> {
        let continuar = true;

        while (continuar) {
            console.log("\n------ MENU DE CLIENTES ------");
            console.log(" 1. Listar clientes");
            console.log(" 2. Pesquisar cliente");
            console.log(" 3. Adicionar cliente");
            console.log(" 4. Remover cliente");
            console.log(" 5. Sair ");

            let menu = this.prompt("Digite a opção: ");

            switch (menu) {
                case "1":
                    console.table(await this.clienteservico.listarClientes());
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "2":
                    let pesquisaCliente = this.prompt("Digite o ID do cliente que deseja buscar: ");
                    console.log(await this.clienteservico.buscarCliente(parseInt(pesquisaCliente)));
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "3":
                    let nome = this.prompt("Digite o nome do cliente: ");
                    let numero = this.prompt("Digite o número do cliente: ");
                    await this.clienteservico.adicionarCliente(nome, numero);
                    console.log("Cliente adicionado com sucesso!");
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "4":
                    let remover = parseInt(this.prompt("Digite o ID do cliente que deseja excluir: "));
                    await this.clienteservico.excluirCliente(remover);
                    console.log("Cliente removido com sucesso!");
                    console.table(await this.clienteservico.listarClientes());
                    this.prompt("Pressione Enter para voltar ao menu...");
                    break;

                case "5":
                    console.log("Saindo do menu de clientes...");
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
}
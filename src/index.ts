import { ClienteView } from "./view/ClienteView";
import { ServicosView } from "./view/ServicosView";
import { HorariosView } from "./view/HorariosView";
import { AgendamentosView } from "./view/AgendamentosView";

async function main() {
    const clienteView = new ClienteView();
    const servicosView = new ServicosView();
    const horariosView = new HorariosView();
    const agendamentosView = new AgendamentosView();

    let continuar = true;

    while (continuar) {
        console.log("\n------ MENU PRINCIPAL ------");
        console.log(" 1. Menu de Clientes");
        console.log(" 2. Menu de Serviços");
        console.log(" 3. Menu de Horários");
        console.log(" 4. Menu de Agendamentos");
        console.log(" 5. Sair");

        const prompt = require("prompt-sync")();
        const menu = prompt("Escolha uma opção: ");

        switch (menu) {
            case "1":
                await clienteView.exibirMenu();
                break;

            case "2":
                await servicosView.exibirMenu();
                break;

            case "3":
                await horariosView.exibirMenu();
                break;

            case "4":
                await agendamentosView.agendarServico();
                break;

            case "5":
                console.log("Saindo...");
                continuar = false;
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    }
}

main().catch((err) => console.error("Erro ao iniciar o menu: ", err));
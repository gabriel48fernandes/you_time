

/*import { ClienteService } from "./service/ClientesService";


const clienteService = new ClienteService();

async function teste() {
  console.log("Adicionando cliente...");
    await clienteService.adicionarCliente("João Silva", "123456789");
    
    console.log("Clientes cadastrados:");
    console.table(await clienteService.listarClientes());
    
    console.log("Buscando cliente...");
    console.table(await clienteService.buscarCliente(1));

    console.log("Excluindo cliente...");
    await clienteService.excluirCliente(1);

    console.log("Clientes após exclusão:");
    console.table(await clienteService.listarClientes());
}

teste();
*/




//import { ClienteView } from "../view/Clienteview";

 // function main() {
   // const clienteView = new ClienteView();
//     clienteView.exibirMenu();
//}

//main();

//import { ServicosView } from "../view/ServicosView";


//const servicosView = new ServicosView();
//servicosView.exibirMenu();
import { HorariosView } from "../view/HorariosView";

const horariosView = new HorariosView();
horariosView.exibirMenu();


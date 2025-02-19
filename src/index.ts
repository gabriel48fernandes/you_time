/*import { ServicosService } from "./Service/Servicos"

//import { ClienteService } from "./service/ClienteService";


const servico = new ServicosService();

 
async function teste() {
  //console.table(await ClienteServicos.listaServicos());
 
  console.table(await servico.listarServico())

}
 
teste();
*/
import { ClienteService } from "./Service/ClienteService";

const clienteService = new ClienteService();

async function teste() {
    console.table(await clienteService.listarClientes());
}

teste();

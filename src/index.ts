//import { ClienteService } from "./service/ClienteService";
import { servicos } from "./service/ServicosService";
 
 servicos
const servico = new servicos();
 
async function teste() {
  console.table(await servico.listarServico());
}
 
teste();
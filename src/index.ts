import { ClienteService } from "./service/ClienteService";
 
 
const servico = new ClienteService();
 
async function teste() {
  console.table(await servico.listarClientes());
}
 
teste();
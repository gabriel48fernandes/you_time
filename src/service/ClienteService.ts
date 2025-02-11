import { Cliente } from "../entity/Cliente";
import { ClienteRepository } from "../repository/clienteRepository";

export class ClienteService{
 
  private repo : ClienteRepository;
 
  constructor(){
    this.repo = new ClienteRepository();
  }
 
  async listarClientes():Promise<Cliente[]>{
    return await this.repo.listarClientes()
  }  
}
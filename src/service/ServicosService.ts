import { Servicos } from "../entity/servicos";
import { ClienteServicos } from "../repository/ServicosRepository";

export class servicos{
 
  private repo : ClienteServicos;
 
  constructor(){
    this.repo = new ClienteServicos();
  }
 
  async listarServico():Promise<Servicos[]>{
    return await this.repo.listarServicos()
  }  
}
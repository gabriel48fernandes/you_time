import { Servicos } from "../Entity/Servicos";
import { ClienteServicos } from "../Repository/Servicos";


export class ServicosService{
 
  private repo : ClienteServicos;
 
  constructor(){
    this.repo = new ClienteServicos();
  }
 
  async listarServico():Promise<Servicos[]>{
    return await this.repo.listarServicos()
  }  
}

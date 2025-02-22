export class Cliente {
  protected cod: number;
  protected nome: string;
  protected numero: string;

  constructor(cod: number, nome: string, numero: string) {
     
      this.nome = nome;
      this.numero = numero;
      this.cod = cod;
  
    }
}
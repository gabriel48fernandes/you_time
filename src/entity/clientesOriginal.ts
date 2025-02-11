export class Cliente {
    private id: number;
    private nome: string;
    private numero: string;
  
    constructor(id: number, nome: string, numero: string) {
      this.id = id;
      this.nome = nome;
      this.numero = numero;
    }
    public mostrarDados(): void {
      console.log(`Nome: ${this.nome} | Telefone: ${this.numero}`);
  }
}

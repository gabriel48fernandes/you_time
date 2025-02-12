export class Servicos {
    protected descricao: string;
    protected preco: number;

    constructor(descricao: string, preco: number) {
        this.descricao = descricao;
        this.preco = preco;
    }

    public mostrarServico(): void {
        console.log("Serviço:" , this.descricao,"valor:", this.preco);
    }
}

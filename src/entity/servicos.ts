export class Servicos {
    protected cod: number;
    protected cortes: string;
    protected valor: number;

    constructor(cod: number, cortes: string, valor: number) {
        this.cod = cod;
        this.cortes = cortes;
        this.valor = valor;
    }
}

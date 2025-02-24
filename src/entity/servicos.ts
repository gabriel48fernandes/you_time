export class Servicos {
    constructor(
        public cod: number,
        public cortes: string,
        public valor: number
    ) {
        if (!cod || !cortes || !valor) {
            throw new Error("Todos os campos são obrigatórios!");
        }
    }
}
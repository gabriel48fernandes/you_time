export class Agendamento {
    constructor(
        public cod: number,
        public cliente: number,
        public servico: number,
        public data: string,
        public horario: string,
        public cod_horario: number
    ) {
        if (!cod || !cliente || !servico || !data || !horario || !cod_horario) {
            throw new Error("Todos os campos são obrigatórios!");
        }
    }
}
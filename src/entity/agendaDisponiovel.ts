export class AgendaDisponivel {
    id: number;
    diaSemana: string
    data: string;  // Data do agendamento (YYYY-MM-DD)
    hora: string;  // Hora disponível (HH:mm)
    disponivel: boolean; // Se o horário está disponível ou não


    constructor(id: number, diaSemana:string, data: string, hora: string, disponivel: boolean) {
        this.id = id;
        this.diaSemana = diaSemana
        this.data = data;
        this.hora = hora;
        this.disponivel = disponivel;
    }
}

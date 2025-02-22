export class Horarios {
    protected dia: string;
    protected hora: string;

    constructor(dia: string, hora: string) {
        this.dia = dia;
        this.hora = hora;
    }

    public mostrarHorario(): void {
        console.log("dia:",this.dia, "hora:",this.hora)
    }
}

import { Pool } from "pg";
import { Database } from "./Database";
import { Horarios } from "../entity/horarios";

export class HorariosRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarHorarios(): Promise<Horarios[]> {
        const query = "SELECT * FROM you_time.horarios";
        const result = await this.pool.query(query);

        const listaHorarios: Horarios[] = [];
        
        for (const row of result.rows) {
            const horario = new Horarios( row.dia_semana, row.horario);
            listaHorarios.push(horario);
        }
        
        return listaHorarios;
    }

    async adicionarHorario(diaSemana: string, horario: string): Promise<void> {
        const query = "INSERT INTO you_time.horarios (dia_semana, horario) VALUES ($1, $2)";
        await this.pool.query(query, [diaSemana, horario]);
    }

    async excluirHorario(id: number): Promise<void> {
        const query = "DELETE FROM you_time.horarios WHERE id = $1";
        await this.pool.query(query, [id]);
    }
}

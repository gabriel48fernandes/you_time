import { Pool } from 'pg';
import { Horarios } from '../entity/horarios';
import { Database } from './Database';

export class HorariosRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarHorariosDisponiveis(diaSemana: string): Promise<Horarios[]> {
        const query = `
            SELECT * FROM you_time.horarios
            WHERE dia_semana = $1 AND disponivel = TRUE;
        `;
        const result = await this.pool.query(query, [diaSemana]);
        return result.rows.map(row => new Horarios(row.dia_semana, row.horario, row.disponivel));
    }

    async verificarHorarioDisponivel(horarioId: number): Promise<boolean> {
        const query = `
            SELECT disponivel FROM you_time.horarios WHERE cod = $1;
        `;
        const result = await this.pool.query(query, [horarioId]);
        return result.rows[0]?.disponivel || false;
    }

    async marcarHorarioIndisponivel(cod: number): Promise<void> {
        const query = "UPDATE you_time.horarios SET disponivel = FALSE WHERE cod = $1";
        await this.pool.query(query, [cod]);
    }
}
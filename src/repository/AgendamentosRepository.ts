import { Pool } from 'pg';
import { Agendamento } from '../entity/Agendamentos';
import { Database } from './Database';

export class AgendamentosRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarAgendamentos(): Promise<Agendamento[]> {
        const query = `
            SELECT ag.cod, c.nome AS cliente, s.cortes AS servico, ag.data, ag.horario
            FROM you_time.agendamentos ag
            JOIN you_time.cliente c ON ag.cliente = c.cod
            JOIN you_time.servicos s ON ag.servico = s.cod
            ORDER BY ag.data, ag.horario;
        `;
        const result = await this.pool.query(query);
        return result.rows;
    }

    async verificarHorarioDisponivel(horarioId: number): Promise<boolean> {
    const query = `
        SELECT disponivel FROM you_time.horarios WHERE cod = $1;
    `;
    const result = await this.pool.query(query, [horarioId]);
    return result.rows[0]?.disponivel || false;
}

    async adicionarAgendamento(clienteId: number, servicoId: number, data: string, horarioId: number): Promise<void> {
        const horarioDisponivel = await this.verificarHorarioDisponivel(horarioId);
        if (!horarioDisponivel) {
            throw new Error("Horário indisponível!");
        }

        const query = `
            INSERT INTO you_time.agendamentos (cliente, servico, data, cod_horario)
            VALUES ($1, $2, $3, $4);
        `;
        await this.pool.query(query, [clienteId, servicoId, data, horarioId]);

        // Marca o horário como indisponível
        await this.pool.query("UPDATE you_time.horarios SET disponivel = FALSE WHERE cod = $1", [horarioId]);
    }
}
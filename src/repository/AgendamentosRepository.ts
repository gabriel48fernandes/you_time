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
            SELECT ag.cod, c.nome AS cliente, s.cortes AS servico,s.valor AS valor, agd.data, agd.hora AS horario
            FROM you_time.agendamentos ag
            JOIN you_time.cliente c ON ag.cliente = c.cod
            JOIN you_time.servicos s ON ag.servico = s.cod
            JOIN you_time.agenda_disponivel agd on ag.id_agenda_disponivel = agd.id
            ORDER BY agd.data, agd.hora;
            
        `;
    
        const result = await this.pool.query(query);
    
        return result.rows.map(row => ({
            ...row,
            data: new Date(row.data).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })
        }));
    }
    

    async verificarHorarioDisponivel(horarioId: number): Promise<boolean> {
        const query = `
            SELECT disponivel FROM you_time.agenda_disponivel WHERE id = $1;
        `;
        const result = await this.pool.query(query, [horarioId]);
        return result.rows[0]?.disponivel || false;
    }

    async adicionarAgendamento(clienteId: number, servicoId: number, agendaDisponivel: number): Promise<void> {
        const query = `
            INSERT INTO you_time.agendamentos (cliente, servico, id_agenda_disponivel)
            VALUES ($1, $2, $3);
        `;
        await this.pool.query(query, [clienteId, servicoId, agendaDisponivel]);

        // Marca o horário como indisponível
        await this.pool.query("UPDATE you_time.agenda_disponivel SET disponivel = FALSE WHERE id = $1", [agendaDisponivel]);
    }

    async excluirAgendamento(cod: number): Promise<void> {
        const query = "DELETE FROM you_time.agendamentos WHERE cod = $1";
        await this.pool.query(query, [cod]);
    }
    async buscarAgendamentoPorId(cod: number): Promise<{ id_agenda_disponivel: number } | null> {
        const query = `SELECT id_agenda_disponivel FROM you_time.agendamentos WHERE cod = $1`;
        const result = await this.pool.query(query, [cod]);
    
        return result.rows.length > 0 ? result.rows[0] : null;
    }
    

}

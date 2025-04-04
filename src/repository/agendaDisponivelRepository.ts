// src/repository/AgendaDisponivelRepository.ts
import { Pool } from 'pg';
import { Database } from './Database';
import { AgendaDisponivel } from '../entity/agendaDisponiovel';


export class AgendaDisponivelRepository {
    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }
    async verificarHorarioDisponivel(id: number): Promise<boolean> {
        const query = `
            SELECT disponivel FROM you_time.agenda_disponivel WHERE id = $1;
        `;
        const result = await this.pool.query(query, [id]);

        // Se existir o horário, retorna o valor de 'disponivel', se não, retorna falso
        return result.rows.length > 0 ? result.rows[0].disponivel : false;
    }

    async listarHorariosDisponiveis(): Promise<AgendaDisponivel[]> {
        const query = `
            SELECT * 
            FROM you_time.agenda_disponivel 
            WHERE data >= CURRENT_DATE 
            AND disponivel = TRUE
            ORDER BY data, hora;
        `;
    
        const result = await this.pool.query(query);
    
        return result.rows.map(row => {
            const dataFormatada = new Date(row.data).toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            });
    
            return new AgendaDisponivel(row.id, dataFormatada, row.data, row.hora, row.disponivel);
        });
    }
    

    async inserirProximosDias(): Promise<void> {
        const diasParaGerar = 5; // Gerar para os próximos 5 dias
        const horarios = ['08:00', '10:00', '14:00', '16:00']; // Defina os horários fixos disponíveis

        for (let i = 0; i < diasParaGerar; i++) {
            const data = new Date();
            data.setDate(data.getDate() + i);

            const diaSemana = data.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

            // Permitir apenas terça (2) até sábado (6)
            if (diaSemana >= 2 && diaSemana <= 6) {
                for (const hora of horarios) {
                    const query = `
                    INSERT INTO you_time.agenda_disponivel (data, hora, disponivel)
                    SELECT $1, $2, TRUE
                    WHERE NOT EXISTS (
                         SELECT 1 FROM you_time.agenda_disponivel WHERE data = $1 AND hora = $2
                     );
                    `;

                    await this.pool.query(query, [data.toISOString().split('T')[0], hora]);
                }
            }
        }
    }


    async restaurarHorario(id: number): Promise<void> {
        const query = `
            UPDATE you_time.agenda_disponivel
            SET disponivel = TRUE
            WHERE id = $1;
        `;
        await this.pool.query(query, [id]);
    }

    async reservarHorario(id: number): Promise<void> {
        const query = `
            UPDATE you_time.agenda_disponivel
            SET disponivel = FALSE
            WHERE id = $1;
        `;
        await this.pool.query(query, [id]);
    }
}

import { Pool } from "pg";

export class Database {
    static pool: Pool;

    static iniciarConexao() {
        if (!this.pool) {
            this.pool = new Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'you_time',
                password: '1234',
                port: 5432,
            });
        }
        return this.pool;
    }
}

// Exportando apenas o pool para usar nas consultas
export const pool = Database.iniciarConexao();

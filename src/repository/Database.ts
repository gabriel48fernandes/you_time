import { Pool } from "pg";
export class Database {
    static pool : Pool
    static iniciarConexao(){
        this.pool= new Pool({
        
            user: 'postgres',
            host: 'localhost',
            database: 'you_time',
            password: '1234',
            port: 5432
        });   
        return this.pool    
    }
}
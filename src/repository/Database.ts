import { Pool } from "pg";
export class Database {
    static pool : Pool
    static iniciarConexao(){
        this.pool= new Pool({
        
            user: 'postgres',
            host: 'localhost',
            database: 'teste2',
            password: '1234',
            port: 5432
        });   
        return this.pool    
    }
}
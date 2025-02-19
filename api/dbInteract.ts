// permet de simplement faire des query ailleurs dans le code

import * as dotenv from 'dotenv';

import mariadb from 'mariadb';
dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});

class dbInteract {
    async aQuery(query:string, params:string) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query, params);
            return data;
        } catch (err) {
            throw err;
        } finally {
            if (connection) connection.release();
        };
    };
}

export default dbInteract;

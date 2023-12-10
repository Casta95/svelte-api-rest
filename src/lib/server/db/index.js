
import Database from "better-sqlite3";

const db = new Database("./src/lib/server/db/movimientos.db", { verbose: console.log });

export function crearTablas() {
    const sqlCrearTablaMovimientos = `CREATE TABLE IF NOT EXISTS MOVIMIENTOS (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    monto REAL,
    fecha DATE,
    descripcion TEXT
    );`
    const stmnt = db.prepare(sqlCrearTablaMovimientos);
    stmnt.run();
}

// @ts-ignore
export async function crearMovimiento(monto, fecha, descripcion) {
    const sqlCrearMovimiento = `INSERT INTO MOVIMIENTOS (
        monto, fecha, descripcion) VALUES (?, ?, ?);`
    const stmnt = db.prepare(sqlCrearMovimiento);
    stmnt.run(monto, fecha, descripcion);
}

export async function listarMovimientos() {
    const sqlListarMovimientos = `SELECT * FROM MOVIMIENTOS ORDER BY fecha DESC`;
    const stmnt = db.prepare(sqlListarMovimientos);
    return stmnt.all();
}
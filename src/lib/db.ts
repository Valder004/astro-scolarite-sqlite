import { Database } from "bun:sqlite";

const db = new Database(process.env.SQLITE_DB_PATH || "./data/scolarite.sqlite");

export { db };


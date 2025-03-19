import mysql from "mysql2/promise";
import fs from "fs/promises";

const initDB = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "hyfuser",
      password: "hyfpassword",
      multipleStatements: true,
    });
    const sql = await fs.readFile("keys.sql", "utf-8");
    await pool.query(sql);
    console.log(`DB created`);
  } catch (err) {
    console.error(err);
  }
};
initDB();

import mysql from "mysql2/promise";
import fs from "fs/promises";

const initQuery = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "hyfuser",
      password: "hyfpassword",
      database: "AuthorResearchDB",
      multipleStatements: true,
    });

    const sql = await fs.readFile("Aggregate.sql", "utf-8");
    const [result] = await pool.query(sql);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
initQuery();

import mysql from "mysql2/promise";
import fs from "fs/promises";

const createTable = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "hyfuser",
      password: "hyfpassword",
      database: "AuthorResearchDB",
      multipleStatements: true,
    });
    const sql = await fs.readFile("Relationships.sql", "utf-8");
    await pool.query(sql);
    console.log(`table created`);
    //  insert the data
    const sql_data = await fs.readFile("Relationships_data.sql", "utf-8");
    await pool.query(sql_data);
    console.log(`data inserted`);
  } catch (err) {
    console.log(err);
  }
};
createTable();

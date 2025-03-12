import mysql from "mysql2/promise";
import fs from "fs/promises";

const initDb = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "hyfuser",
      password: "hyfpassword",
      multipleStatements: true,
    });
    //create database. all the statement is in the world.sql file
    const sql = await fs.readFile("world.sql", "utf-8");
    await pool.query(sql);
    console.log(`data created `);
    //query statement. all the statement is in the query.sql file
    const sqlQuery = await fs.readFile("query.sql", "utf-8");
    const [result] = await pool.query(sqlQuery);
    console.log(result);
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

initDb();

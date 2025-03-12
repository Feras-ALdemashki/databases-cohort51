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
    //create database. all the statement is in the meetup.sql file
    const sql = await fs.readFile("meetup.sql", "utf-8");
    await pool.query(sql);
    console.log(`data created `);
  } catch (err) {
    console.log(`error: ${err}`);
  }
};

initDb();

// this is the transaction for exercise 3.2

import mysql from "mysql2/promise";

const initTransaction = async (fromAccount, toAccount, amount) => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "transaction",
    multipleStatements: true,
  });
  // creating a connection
  const connection = await pool.getConnection();
  try {
    // start the transaction
    await connection.beginTransaction();
    await connection.query(
      "UPDATE account SET balance = balance - ? WHERE account_number = ?",
      [amount, fromAccount]
    );
    await connection.query(
      "UPDATE account SET balance = balance + ? WHERE account_number = ?",
      [amount, toAccount]
    );
    await connection.query(
      "INSERT INTO account_changes (change_number, account_number, amount, changed_date, remark) VALUES (4, ?, ?, NOW(), 'Transfer')",
      [fromAccount, -amount]
    );
    await connection.query(
      "INSERT INTO account_changes (change_number, account_number, amount, changed_date, remark) VALUES (5, ?, ?, NOW(), 'Transfer Received')",
      [toAccount, amount]
    );
    // commit the transaction
    await connection.commit();
    const changesTable = await connection.query(
      `SELECT * FROM account_changes;`
    );
    console.log(changesTable[0]);
  } catch (err) {
    // rollback incase of an error
    await connection.rollback();
    console.log(` something went wrong!. Error: ${err}`);
  }
};

initTransaction(101, 102, 1000);

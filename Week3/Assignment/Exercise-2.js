// the first part of exercise 2. creating the tables and inserting the data
// the transaction part is in the Exercise-2-transaction file

import mysql from "mysql2/promise";

const initDB = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "hyfuser",
      password: "hyfpassword",
      multipleStatements: true,
    });
    await pool.query("CREATE DATABASE IF NOT EXISTS transaction");
    console.log(`database created`);
    await pool.query("USE transaction");
    console.log(`using transaction DB`);
    const createTableAccount = `
    CREATE TABLE IF NOT EXISTS account (
    account_number int primary key ,
    balance DECIMAL 
    );`;
    await pool.query(createTableAccount);
    console.log(`account table created`);
    const createAccountCHangesTable = `CREATE TABLE IF NOT EXISTS account_changes (
        change_number int primary key ,
        account_number int,
        amount DECIMAL(15,2),
        changed_date date,
        remark varchar(255),
        foreign key (account_number) references account (account_number)
        );`;
    await pool.query(createAccountCHangesTable);
    console.log(`account_changes table created`);
    const insertAccounts = `
    INSERT INTO account (account_number, balance) VALUES 
    (100, 5000.00),
    (101, 7500.50),
    (102, 1200.75);
    `;
    await pool.query(insertAccounts);
    console.log(`Accounts inserted`);
    const insertAccountChanges = `
    INSERT INTO account_changes (change_number, account_number, amount, changed_date, remark) VALUES 
    (1, 100, 500.00, '2024-03-25', 'Deposit'),
    (2, 101, -200.00, '2024-03-24', 'Withdrawal'),
    (3, 102, 300.25, '2024-03-23', 'Salary Credit');
    `;
    await pool.query(insertAccountChanges);
    console.log(`Account changes inserted`);
  } catch (err) {
    console.error(`Error:${err}`);
  }
};

initDB();

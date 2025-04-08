import { MongoClient } from "mongodb";
import { updateData } from "./setup.js";
import { transfer } from "./transfer.js";
import dotenv from "dotenv";
dotenv.config();
// this function will connect to the DB, setup the collection and start the transaction
const main = async () => {
  const url = process.env.URL;
  const client = new MongoClient(url);

  try {
    await client.connect();
    // to setup the collection before transaction delete all the data and create a new one
    await updateData(client);
    // the transfer function
    await transfer(client, 101, 102, 1000, "money transfer");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};
main();

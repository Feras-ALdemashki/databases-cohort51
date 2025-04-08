import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  getPopulationByContinent,
  getPopulationByCountry,
} from "./ex1-functions.js";
dotenv.config();
// the main function to connect to DB and init the mongoDB aggregation
const main = async () => {
  const url = process.env.URL;
  const client = new MongoClient(url);

  try {
    await client.connect();
    await getPopulationByCountry(client, "Netherlands");
    await getPopulationByContinent(client, 2020, "100+");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

main();

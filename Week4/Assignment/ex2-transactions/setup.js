import { sampleAccounts } from "./data_sample.js";
// It should clean up the accounts array and then fill it with some sample data. Just like last last week we want an account document to have an account_number and balance field. Then it should have another field called account_changes that is an array that contains the fields: change_number, amount, changed_date, remark.
export const updateData = async (client) => {
  await client.db("databaseWeek4").collection("accounts").deleteMany({});
  console.log("previous data deleted");
  await client
    .db("databaseWeek4")
    .collection("accounts")
    .insertMany(sampleAccounts);
  console.log("data inserted");
};

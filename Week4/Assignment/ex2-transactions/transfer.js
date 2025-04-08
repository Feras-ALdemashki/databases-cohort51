//Create a transfer.js file that will hold our transfer function.
// It should transfer money from one account to another, so it will need to know the following things: from which account, to which account, the amount and the remark for this transaction.
// This should update the balances of both accounts and for each account add a change to the list. The change number should be incremented, so if the latest change_number is 30, the change_number for the new change should be 31.

export const transfer = async (
  client,
  fromAccountNumber,
  toAccountNumber,
  amount,
  remark
) => {
  const accounts = await client
    .db("databaseWeek4")
    .collection("accounts")
    .find({ account_number: { $in: [fromAccountNumber, toAccountNumber] } })
    .toArray();
  const fromAccount = accounts.find(
    (acc) => acc.account_number === fromAccountNumber
  );
  const toAccount = accounts.find(
    (acc) => acc.account_number === toAccountNumber
  );
  if (!fromAccount || !toAccount) {
    throw new Error("One or both accounts not found.");
  }
  if (fromAccount.balance < amount) {
    throw new Error("Insufficient balance in the sender account.");
  }
  const nextChangeNumberFrom =
    Math.max(
      ...fromAccount.account_changes.map((change) => change.change_number),
      0
    ) + 1;
  const nextChangeNumberTo =
    Math.max(
      ...toAccount.account_changes.map((change) => change.change_number),
      0
    ) + 1;
  fromAccount.balance -= amount;
  fromAccount.account_changes.push({
    change_number: nextChangeNumberFrom,
    amount: -amount,
    changed_date: new Date(),
    remark: remark,
  });
  toAccount.balance += amount;
  toAccount.account_changes.push({
    change_number: nextChangeNumberTo,
    amount: amount,
    changed_date: new Date(),
    remark: remark,
  });
  const bulkOperations = [
    {
      updateOne: {
        filter: { account_number: fromAccountNumber },
        update: {
          $set: { balance: fromAccount.balance },
          $push: { account_changes: fromAccount.account_changes.slice(-1) },
        },
      },
    },
    {
      updateOne: {
        filter: { account_number: toAccountNumber },
        update: {
          $set: { balance: toAccount.balance },
          $push: { account_changes: toAccount.account_changes.slice(-1) },
        },
      },
    },
  ];
  await client
    .db("databaseWeek4")
    .collection("accounts")
    .bulkWrite(bulkOperations);

  console.log("accounts updated.");
};

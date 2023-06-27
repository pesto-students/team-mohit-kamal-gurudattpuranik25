let id = 1;
const generateTransactionIDs = () => {
  const newTransactionID = Symbol(`TRANSACTION_ID_${id}`);
  id++;
  return newTransactionID;
};

const transaction1 = generateTransactionIDs();
console.log(transaction1.description);

const transaction2 = generateTransactionIDs();
console.log(transaction2.description);

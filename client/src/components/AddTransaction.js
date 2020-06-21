import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  
  const { transactions, addTransaction } = useContext(GlobalContext);
  
  const lastTransactionId = transactions[transactions.length-1]; // get the ID from last transaction in the array
  // const newTransactionId = lastTransactionId +1;
  
  console.log(lastTransactionId);
  
  
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text: text,
      amount: parseFloat(amount)
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            Income(positive), Expense(negative)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} step="0.01" placeholder="Enter amount..." />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

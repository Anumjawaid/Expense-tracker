import React, { useContext,useState } from 'react'
import {TransactionContext} from './transContext';

function History(){

  let { transactions, addTransaction,deleteTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);


  const handleAddition = (event) => {
      event.preventDefault();
      if (Number(newAmount) === 0) {
          alert("Please enter correct value");
          return false;
      }
      addTransaction({
          amount: Number(newAmount),
          desc: String(newDesc),
          id :transactions.length
      });

      setDesc('Example');
       setAmount(0)
  }
const deletetran=(ind)=>{
    
    deleteTransaction({
      index:ind
    })

}
  const getIncome = () => {
      let income = 0;
      for (var i = 0; i < transactions.length; i++) {
          if (transactions[i].amount > 0)
              income = income + transactions[i].amount
      }
      return income;
  }

  const getExpense = () => {
      let expense = 0;
      for (var i = 0; i < transactions.length; i++) {
          if (transactions[i].amount < 0)
              expense += transactions[i].amount
      }
      return expense;
  }

  return (
      <div >
           <div className='acc'>
   <h4>Your Balance</h4>
         <h2 >${getIncome() + getExpense()}</h2>
         </div>
             
         <div className="inc-exp-container">
<div className="inc">
   <h4>Income</h4>
    <p classNAme="money plus">${getIncome()}</p>
</div>
<div className="exp">
   <h4>Expense</h4>
   <p className="money minus">${getExpense()}</p>
</div>

</div>

        

          <h3>History</h3>
          <hr />

          <ul className="list">
              {transactions.map((transObj, ind) => {
                  return (<li key={ind}>
                      <span>{transObj.desc}</span>
                  <span >${transObj.amount}</span><button onClick={()=>{deletetran(transObj.id)}}class="delete-btn">x{}</button>
                  </li>
                  )
              })}

          </ul>

          <h3>Add new transaction</h3>
          <hr />

          <form className="transaction-form" onSubmit={handleAddition}>
              <label>
                  Enter Description <br />
                  <input type="text"
                      value={newDesc}
                      placeholder="Description"
                      onChange={(ev) => setDesc(ev.target.value)}
                      required />
              </label>

              <br />
              <label>
                  Enter Amount <br />
                  <input type="number"
                      value={newAmount}
                      placeholder="Amount"
                      onChange={(ev) => setAmount(ev.target.value)}
                      required />
              </label>
              <br />
              <button className="btn" >Add transaction</button>

          </form>
      </div>
  );
}
export default History;
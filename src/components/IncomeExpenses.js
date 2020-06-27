import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  function sum(total, value){
    return total + value
}

  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce(sum, 0).toFixed(2);
  const expense = amount.filter(item => item < 0).reduce(sum,0).toFixed(2);  
    return (
        <div>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
        </div>
    )
}

import React, { useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expense/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car insurance', 
    amount: 294.67, 
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'Apple',
    amount: 29.99,
    date: new Date(2021, 3, 11),
  },
  {
    id: 'e3',
    title: 'Pineapple',
    amount: 49.99,
    date: new Date(2020, 3, 11),
  },
  {
    id: 'e4',
    title: 'Bike',
    amount: 299.99,
    date: new Date(2022, 3, 11),
  }
];

function App() 
{
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => { 
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses  item={expenses} />
    </div>
  );

}

export default App;

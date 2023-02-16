import {useState} from 'react';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ChartExpenses from './ChartExpenses';
import './Expenses.css';



function Expenses(props)
{
  const [filteredYear, setFilteredYear] = useState('2022');

  const checkDate = (selected) => {
    setFilteredYear(selected);
  };

  const filteredExpenses = props.item.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredYear} 
        onSelectFilter={checkDate}
      />
      <ChartExpenses expense={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
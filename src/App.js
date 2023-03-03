// import ExpenseItem from './components/Expenses/ExpenseItem';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expenses/NewExpense';

const Initial_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 0, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 9, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Initial_Expenses);  

  const onAddExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });

  };


  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
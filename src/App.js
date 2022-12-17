
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Style/Expenses.css'
import Card from './components/UI/Card';
import NewExpenses from './components/Expenses/NewExpenses/NewExpenses';
import { useState } from 'react';

var INITIAL_EXPENSES = [
  {
    id: 1,
    title: 'Dress',
    amount: 2000,
    date: new Date(2020, 8, 22)
  },
  {
    id: 2,
    title: 'Snacks',
    amount: 200,
    date: new Date(2021, 8, 20)
  },
  {
    id: 3,
    title: 'travel',
    amount: 1500,
    date: new Date(2019, 8, 12)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const collectNewExpense = (expenseData) => {
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses]
    })  
    console.log(expenses)
  }
  return (
    <Card className='expenses'>
      <NewExpenses onNewExpense = {collectNewExpense}/>  
      <Expenses data = {expenses}></Expenses>
    </Card>
  )

}

export default App;

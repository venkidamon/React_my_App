
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Style/Expenses.css'
import Card from './components/UI/Card';
import NewExpenses from './components/Expenses/NewExpenses/NewExpenses';



const App = () => {

  var expenses = [
    {
      id: 1,
      title: 'Dress',
      amount: 2000,
      date: new Date(2021, 8, 22)
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
      date: new Date(2021, 8, 12)
    },

  ]

  return (
    <Card className='expenses'>
      <NewExpenses/>  
      <Expenses data = {expenses}></Expenses>
    </Card>
  )

}

export default App;

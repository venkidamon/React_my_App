import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //different usestate for different input variable
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleHandler} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountHandler} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;
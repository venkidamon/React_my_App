import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    //different usestate for different input variable
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    //same useState for different input variable
    //when using a same useState we must be careful with the prev state
    //as react only schedules the useState to execute in order it may not update 
    //so we need to handle the prevState
    
    // const [expenseForm, setExpenseForm] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })
    const titleHandler = (event) => {
        setTitle(event.target.value)
        // setExpenseForm({
        //     ...expenseForm,
        //     enteredTitle: event.target.value
        // })
        // setExpenseForm((prevState) => {
        //     return{...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
        // setExpenseForm({
        //     ...expenseForm,
        //     enteredAmount: event.target.value
        // })
        // setExpenseForm((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
        // setExpenseForm({
        //     ...expenseForm,
        //     enteredDate: event.target.value
        // })
        // setExpenseForm((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }

    const formHandler = (event) => {
        event.preventDefault();
        const formData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        console.log(formData)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return <form onSubmit={formHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={titleHandler} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amount} onChange={amountHandler} ></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;
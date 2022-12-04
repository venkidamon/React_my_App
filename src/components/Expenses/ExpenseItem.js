import './Style/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const eventHandler = () => {
        let newTitle = 'Hello World';
        setTitle(newTitle)
    }
    return (
        <Card className="expense-item">
           <ExpenseDate date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={eventHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
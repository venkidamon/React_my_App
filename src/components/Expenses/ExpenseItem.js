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
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    {/* this is known as state components {title} */}
                    <h2>{title}</h2>
                    {/* This is known as dum components {props.amount} */}
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
                <button onClick={eventHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem
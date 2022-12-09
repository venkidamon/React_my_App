import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './Style/Expenses.css';
import { useState } from "react";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = useState('2019');

    const expenseFilterSelected = (expenseFilterValue) => {
        console.log('expenses')
        setExpenseFilter(expenseFilterValue)
        console.log(expenseFilter)
    }
    return (
        <div>
            {/* Two way binding */}
            <ExpenseFilter onExpenseFilterSelected = {expenseFilterSelected} selected = {expenseFilter}></ExpenseFilter>
            <Card className = 'expenses'>
                <ExpenseItem title = {props.data[0].title}
                amount = {props.data[0].amount}
                date = {props.data[0].date}>
                </ExpenseItem> 
                <ExpenseItem title = {props.data[1].title}
                amount = {props.data[1].amount}
                date = {props.data[1].date}>
                </ExpenseItem> 
                <ExpenseItem title = {props.data[2].title}
                amount = {props.data[2].amount}
                date = {props.data[2].date}>
                </ExpenseItem>
            </Card>
        </div>
    )

}

export default Expenses;
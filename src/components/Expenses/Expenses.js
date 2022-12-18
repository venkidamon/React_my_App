import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './Style/Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = useState('2019');

    const expenseFilterSelected = (expenseFilterValue) => {
        setExpenseFilter(expenseFilterValue)
    }

    const filteredExpenses = props.data.filter(ele => {
        return ele.date.getFullYear().toString() === expenseFilter
    })

    return (
        <div>
            {/* Two way binding */}
            <Card className='expenses'>
                <ExpenseFilter onExpenseFilterSelected={expenseFilterSelected} selected={expenseFilter}></ExpenseFilter>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    )

}

export default Expenses;
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './Style/Expenses.css';
import { useState } from "react";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = useState('2019');
    const [enableYearFilter, setEnableYearFilter] = useState(false);
    const [newFilteredArr, setNewFilterArr] = useState([])
    const expenseFilterSelected = (expenseFilterValue) => {
        setExpenseFilter(expenseFilterValue)
        let newFilteredArr1 = []
        newFilteredArr1 = props.data.filter((ele) => {
            if(ele.date.getFullYear().toString() === expenseFilterValue){
                return ele
            }
        })
        setNewFilterArr(newFilteredArr1)
        setEnableYearFilter(true)
        console.log(newFilteredArr)
    }
    return (
        <div>
            {enableYearFilter && newFilteredArr.length > 0 ? (
                <div>
                    <Card className='expenses'>
                        <ExpenseFilter onExpenseFilterSelected={expenseFilterSelected} selected={expenseFilter}></ExpenseFilter>
                        {newFilteredArr.map(expense => <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            // *key should be unique so that it will resolve the child conflict in the console
                            // as react update the element one by one and replace all the element to avoid that we use key
                            key={expense.id}></ExpenseItem>)}
                    </Card>
                </div>
            ) : (
                <div>
                    {/* Two way binding */}
                    <Card className='expenses'>
                        <ExpenseFilter onExpenseFilterSelected={expenseFilterSelected} selected={expenseFilter}></ExpenseFilter>
                        {props.data.map(expense => <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            // *key should be unique so that it will resolve the child conflict in the console
                            // as react update the element one by one and replace all the element to avoid that we use key
                            key={expense.id}></ExpenseItem>)}
                    </Card>
                </div>
            )}



        </div>
    )

}

export default Expenses;
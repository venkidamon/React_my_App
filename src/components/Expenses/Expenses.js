import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

const Expenses = (props) => {
    let result = props.data.map(ele => {
        return (
            <Card>
                <ExpenseItem date = {ele.date} amount = {ele.amount} title = {ele.title}></ExpenseItem>
            </Card>
        )
    })
    return result

}

export default Expenses;
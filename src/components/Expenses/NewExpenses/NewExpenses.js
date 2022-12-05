
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpenses = (props) => {
    const collectExpenseFormData = (expenseFromData) => {
        const expenseData = {
            ...expenseFromData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData)
    }
    return (
        <div className="new-expense">
            {/* child to parent communication */}
            <ExpenseForm onSaveExpenseForm = {collectExpenseFormData}></ExpenseForm>
        </div>
    )
}

export default NewExpenses;
